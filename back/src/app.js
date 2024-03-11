//Fichier qui lance le serveur

//Récupérer express et la fonction publicationRoute
const express = require("express");

const publicationRoute = require("./routes/publicationRoute");
const authRoute = require("./routes/authRoutes");

var cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));


//Middleware pour parser le JSON et utiliser le fichier JSON
app.use(express.json());

app.use("/api/publication", publicationRoute);
app.use("/api/auth", authRoute);

//Lancer le serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
