const { Router } = require("express");
const { drinksController } = require("../controllers/Drinks.controller");
const route = Router();

route.get("/drinks", drinksController.getDrinks);
route.get("/drinks/in-stock", drinksController.getDrinksisThereDrinkAvailable);
route.get("/drinks/:id", drinksController.getDrinksInfo);
route.post("/drinks", drinksController.addDrinks);
route.delete("/drinks/:id", drinksController.deleteDrinks);
route.patch("/drinks/:id", drinksController.patchDrinks);

module.exports = route;