const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        isThereDrinkAvailable: Boolean,
        coffeine: Boolean,
        volume: Number,
        descriptionВrink: String
    }
)

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;