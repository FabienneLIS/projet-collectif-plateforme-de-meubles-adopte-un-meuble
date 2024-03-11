//Fichier qui fait une requête pour récupérer les données de la BDD

//Importer supabase
const { createClient } = require("@supabase/supabase-js");

//Récupérer la clé d'API de Supabase dans le fichier .env
require("dotenv").config();

//Lien entre BDD et API
const supabaseUrl = "https://zfrowkmhwhnhmyzwxlez.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY


//Obtenir l'autorisation d'utiliser la BDD à partir de l'URL et de la clé d'API : on récupère une key ou token
const supabase = createClient(supabaseUrl, supabaseKey);

//Requête pour obtenir toutes les publications de la BDD :
const getPublication = async (req, res) => {
  const { data, error } = await supabase
    .from("Publications")
    .select(
      "Utilisateur!inner(pseudo , admin),Type!inner(type), description, date, Statut_Publication!inner(statut),id, titre, prix, photos, Couleur!inner(couleur), Matière!inner(matière), État_Meuble!inner(état), Dimensions!inner(hauteur,largeur,longueur), Pièce!inner(pièce)"
    );
  if (error) throw error;
  return data;
  //nom de vendeur,nom de type, status, couleur, dimension, pièce
};

//Requête pour obtenir une publication à partir de son id :
const getPublicationById = async (req, res) => {
  const { data, error } = await supabase
    .from("Publications")
    .select(
      "Utilisateur!inner(pseudo),Type!inner(type), description, date, Statut_Publication!inner(statut), titre, prix, photos, Couleur!inner(couleur), Matière!inner(matière), État_Meuble!inner(état), Dimensions!inner(hauteur,largeur,longueur), Pièce!inner(pièce),id"
    )
    .eq("id", req.params.id);
  if (error) throw error;
  return data;
};

// front doit renvoyer l'id de couleur, l'id de type et le prix
// permet de filtrer les publications
const filterPublication = async (req, res) => {
  let query = supabase
    .from("Publications")
    .select(
      "Utilisateur!inner(pseudo),Type!inner(type), description, date, Statut_Publication!inner(statut), id,titre, prix, photos, Couleur!inner(couleur), Matière!inner(matière), État_Meuble!inner(état), Dimensions!inner(hauteur,largeur,longueur), Pièce!inner(pièce)"
    );
  const type = req.query.type;
  const couleur = req.query.couleur;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const status = req.query.status;

  //si ... se trouve dans la requete, alors on ajoute le filtre
  if (type) {
    query = query.eq("Type.type", type);
  }
  if (couleur) {
    query = query.eq("Couleur.couleur", couleur);
  }
  if (minPrice) {
    query = query.gte("prix", minPrice);
  }
  if (maxPrice) {
    query = query.lte("prix", maxPrice);
  }
  if (status) {
    query = query.eq("Statut_Publication.statut", status);
  }

  const { data, error } = await query;
  if (error) {
    throw error;
  }
  return data;
};

// peremt de récupérer le titre, la photo et le prix présent dans publications, utile pour la page d'accueil du front
const getEssentials = async (req, res) => {
  const { data, error } = await supabase
    .from("Publications")
    .select("titre, photos, prix");
  if (error) throw error;
  return data;
};

const getNewPost = async (req, res) => {
  const { data, error } = await supabase
    .from("Publications")
    .insert([
      {
        //A corriger avec les infos de front
        vendeur_id: req.body.idSession,
        type_id: 1, //A corriger avec les infos de front
        description: req.body.description,
        date: req.body.date,
        statut_id: 4,
        titre: req.body.titre,
        prix: req.body.prix,
        photos: req.body.photos,
        couleur_id: 1, //A corriger avec les infos de front
        matière_id: 1, //A corriger avec les infos de front
        état_id: 1, //A corriger avec les infos de front
        dimension_id: 1, //A corriger avec les infos de front
        pièce_id: 1, //A corriger avec les infos de front
      },
    ])
    .select();
  if (error) {
    console.log(error);
  }
  return data;
};

//Changer le statut d'une publication de "à valider" -> "en vente" selon l'id
const updateStatut = async (req, res) => {
  const { data, error } = await supabase
    .from("Publications")
    .update({ satut_id: 1 })
    .eq("id", req.params.id)
    .select();
  if (error) {
    console.log(error);
  }
  return data;
};

//fonction pour supprimer une annonce en fonction de id
const deletePost = async (req, res) => {
  const { data, error } = await supabase
    .from("Publications")
    .delete("*")
    .eq("id", req.params.id);
  if (error) throw error;
  return data;
};

//fonction pour supprimer un élement du panier
const deletePanier = async (req, res) => {
  const { data, error } = await supabase
    .from("Panier")
    .delete("*")
    .eq("id", req.params.id);
  if (error) throw error;
  return data;
};

//Exporter les fonctions pour pouvoir les utiliser dans le fichier publicationControllers.js

const getPanier = async (req, res) => {
  const { data, error } = await supabase
    .from("Panier")
    .select(
      "date,Statut_Publication!inner(statut),User!inner(pseudo),Publications!inner(prix)"
    )
    //peut-être changer id comme session_id ?
    .eq("acheteur_id", req.params.id);
  if (error) throw error;
  return data;
};

//Exporter les fonctions pour pouvoir les utiliser dans le fichier publicationControllers.js
module.exports = {
  getPublication,
  getPublicationById,
  filterPublication,
  getEssentials,
  updateStatut,
  getNewPost,
  deletePost,
  deletePanier,
  getPanier,
};
