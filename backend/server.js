const express = require("express");
const connectMongo = require("./config/db.config");
const app = express();
const dotenv = require("dotenv").config();



// LANCEMENT SERVER:
const port = process.env.PORT;
app.listen(port, () => {
    port ? console.log("App running on port " + port) : console.log("Invalide Port");
});

// CONNEXION A MONGODB:
connectMongo(); 

// MIDDLEWARES:

// UTILISATION DES ROUTES:
