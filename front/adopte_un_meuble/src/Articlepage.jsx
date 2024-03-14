import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Articlepage() {
    const [meuble, setMeuble] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        const fetchId = async () => {
            const fetchUrlCategoryType = new URLSearchParams(window.location.search);
            const fetchedId = fetchUrlCategoryType.get("id");
            setId(fetchedId);
        };

        fetchId();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/publication/${id}`);
                    const publications = await response.json();
                    const publication = publications[0];

                    const meubleData = {
                        titre: publication.titre,
                        pseudoUtilisateur: publication.Utilisateur.pseudo,
                        vendeurId: publication.Utilisateur.id,
                        prix: publication.prix,
                        description: publication.description,
                        photos: publication.photos,
                        type: publication.Type.type,
                        couleur: publication.Couleur.couleur,
                        matiere: publication.Matière.matière,
                        etatMeuble: publication.État_Meuble.état,
                        dimensions: publication.Dimensions,
                        piece: publication.Pièce.pièce,
                    };

                    setMeuble(meubleData);
                } catch (error) {
                    console.error("Erreur lors de la récupération des données:", error);
                }
            };

            fetchData();
        }
    }, [id]);

    const ajouterAuPanier = () => {
        const date = new Date().toISOString();
        const idUser = sessionStorage.getItem("user");
        const idPublication = id;
        const idVendeur = meuble ? meuble.vendeurId : null;

        if (!idUser || !idPublication || !idVendeur) {
            console.error("Impossible d'ajouter au panier: informations manquantes.");
            return;
        }

        fetch("http://localhost:3000/api/publication/addpanier", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: date,
                idUser: idUser,
                idPublication: idPublication,
                idVendeur: idVendeur,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la requête");
                }
                return response.json();
            })
            .then((data) => {
                alert("Article ajouté au panier avec succès !");
            })
            .catch((error) => {
                console.error("Erreur:", error);
            });
    };

    if (!meuble) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <Navbar className="overflow-hidden" />
            <div className="h-auto w-full overflow-hidden flex items-center ">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnMouseEnter: true,
                            stopOnInteraction: false,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    orientation="vertical"
                    className="w-full max-w-s"
                >
                    <CarouselContent className=" -mt-50 - h-[20rem] items-center ">
                        {meuble.photos != null ? (
                            meuble.photos.map((photo, index) => (
                                <CarouselItem className="pt-1" key={photo}>
                                    <div className="flex items-center">
                                        <img className="h-[20rem] items-center basis-1/3 w-full" src={"http://localhost:3000/photos/" + photo} alt={`Image ${photo}`} />
                                    </div>
                                </CarouselItem>
                            ))
                        ) : (
                            <div className="flex items-center">
                                <img className="h-[20rem] items-center basis-1/3 w-full" src={"http://localhost:3000/photos/logo.png"} alt="Image par défaut" />
                            </div>
                        )}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="h-full w-full px-[50px]">
                <div className="w-auto h-auto flex-col justify-start items-start gap-[5px] inline-flex mt-20">
                    <div className="text-lightMode-text font-bold text-2xl">{meuble.titre}</div>
                    <div className="text-lightMode-text font-bold text-xl">€{meuble.prix}</div>
                    <div className="text-lightMode-text font-bold text-l">{meuble.pseudoUtilisateur}</div>
                    <div className="mt-5 pt-4 pb-4">
                        <button className="text-lightMode-text font-bold text-xl underline" onClick={ajouterAuPanier}>
                            ajouter au panier
                        </button>
                    </div>
                </div>

                <div className="w-auto h-auto flex-col justify-start items-start gap-[5px] flex mt-5">
                    <div className="text-lightMode-text font-bold text-xl">description</div>
                    <div className="pt-2 text-lightMode-text text-l">{meuble.description}</div>
                </div>

                <div className="w-auto h-auto flex-col justify-start items-start gap-[5px] inline-flex mt-10">
                    <div className="text-lightMode-text font-bold text-xl">critères</div>
                    <table className="table-auto font-bold">
                        <thead>
                            <tr>
                                <th className="p-4 text-gray-500 text-l">état</th>
                                <th className="p-4 text-gray-500 text-l">type</th>
                                <th className="p-4 text-gray-500 text-l">matière</th>
                                <th className="p-4 text-gray-500 text-l">couleur</th>
                                <th className="p-4 text-gray-500 text-l">pièce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4">{meuble.etatMeuble}</td>
                                <td className="p-4">{meuble.type}</td>
                                <td className="p-4">{meuble.matiere}</td>
                                <td className="p-4">{meuble.couleur}</td>
                                <td className="p-4">{meuble.piece}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-auto h-auto flex-col justify-start items-start gap-[5px] inline-flex mt-10">
                    <div className="text-lightMode-text font-bold text-xl flex ">dimensions</div>
                    <table className="table-auto font-bold">
                        <thead>
                            <tr>
                                <th className="p-4 text-gray-500 text-l">hauteur</th>
                                <th className="p-4 text-gray-500 text-l">largeur</th>
                                <th className="p-4 text-gray-500 text-l">longueur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4">{meuble.dimensions.hauteur} cm</td>
                                <td className="p-4">{meuble.dimensions.largeur} cm</td>
                                <td className="p-4">{meuble.dimensions.longueur} cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Articlepage;
