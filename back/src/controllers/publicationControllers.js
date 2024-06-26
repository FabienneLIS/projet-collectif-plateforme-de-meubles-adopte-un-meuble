//Fichier qui détermine l'utilisation des données de la requête

//Importe la fonction getPublication du fichier publicationModel.js
const publicationModel = require("../models/publicationModel");

//Fonction pour afficher la liste de publications récupérée dans publicationModel.js
const getAllPublication = async (req, res) => {
  try {
    const publication = await publicationModel.getPublication();
    res.send(publication);
    console.log(publication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryList = async (req, res) => {
  try {
    const categoryList = await publicationModel.getCategoryList();
    res.send(categoryList);
    console.log(categoryList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStatusList = async (req, res) => {
  try {
    const statusList = await publicationModel.getStatusList();
    res.send(statusList);
    console.log(statusList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEtatList = async (req, res) => {
  try {
    const etatList = await publicationModel.getEtatList();
    res.send(etatList);
    console.log(etatList);
  } catch (error) {
    res.etat(500).json({ error: error.message });
  }
};

const getMatiereList = async (req, res) => {
  try {
    const matiereList = await publicationModel.getMatiereList();
    res.send(matiereList);
    console.log(matiereList);
  } catch (error) {
    res.matiere(500).json({ error: error.message });
  }
};

const getCouleurList = async (req, res) => {
  try {
    const couleurList = await publicationModel.getCouleurList();
    res.send(couleurList);
    console.log(couleurList);
  } catch (error) {
    res.couleur(500).json({ error: error.message });
  }
};

const getPieceList = async (req, res) => {
  try {
    const pieceList = await publicationModel.getPieceList();
    res.send(pieceList);
    console.log(pieceList);
  } catch (error) {
    res.piece(500).json({ error: error.message });
  }
};

//Afficher une publication à partir de son id
const getPublicationById = async (req, res) => {
  try {
    const publication = await publicationModel.getPublicationById(req, res);

    //    res.set({
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Origin" : "*",
    // });
    res.json(publication);
    console.log(publication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const filterPublication = async (req, res) => {
  try {
    const publication = await publicationModel.filterPublication(req, res);
    res.send(publication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEssentials = async (req, res) => {
  try {
    const essentials = await publicationModel.getEssentials(req, res);
    res.send(essentials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStatut = async (req, res) => {
  try {
    const statutUpdated = await publicationModel.updateStatut(req, res);
    res.send(statutUpdated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewPost = async (req, res) => {
  try {
    const newpost = await publicationModel.getNewPost(req, res);
    res.send(newpost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeletePost = async (req, res) => {
  try {
    const deletePost = await publicationModel.deletePost(req, res);
    res.send(deletePost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPanier = async (req, res) => {
  try {
    const panier = await publicationModel.getPanier(req, res);
    res.send(panier);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getDeletePanier = async (req, res) => {
  try {
    const deletePanier = await publicationModel.deletePanier(req, res);
    res.send(deletePanier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCart = async (req, res) => {
  try {
    const addCart = await publicationModel.addCart(req, res);
    res.send(addCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Export des fonctions pour pouvoir les utiliser dans le fichier publicationRoute.js

module.exports = {
  getAllPublication,
  getPublicationById,
  filterPublication,
  getEssentials,
  updateStatut,
  getNewPost,
  getDeletePost,
  getDeletePanier,
  getPanier,
  getCategoryList,
  addCart,
  getStatusList,
  getEtatList,
  getMatiereList,
  getCouleurList,
  getPieceList,
};
