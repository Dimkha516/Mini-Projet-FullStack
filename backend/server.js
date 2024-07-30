const express = require("express");
const connectMongo = require("./config/db.config");
const router = require("./routes/post.routes");
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
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// UTILISATION DES ROUTES:
app.use("/posts", router);

// UTILISATION DES ROUTES:
