const Drink = require("../models/Drink.model");

module.exports.drinksController = {
    getDrinks: async (req, res) => {
        const {name, price} = req.body;
        try {
            const drinksList = await Drink.find({}, {name: 1, price: 1});
            res.json(drinksList)
        } catch(error) {
            res.json(`${error.message}: Ошибка при получения всех напитков`)
        }
    },
    getDrinksisThereDrinkAvailable: async (req, res) => {
        const {name, price} = req.body;
        try {
            const drinksisThereDrinkAvailableList = await Drink.find({
                isThereDrinkAvailable: true
            }, {name: 1, price: 1})
            res.json(drinksisThereDrinkAvailableList)
        } catch (error) {
            res.json(`${error.message}: Ошибка при получении список всех напитков, которые есть в наличии`)
        }
    },
    getDrinksInfo: async (req, res) => {
        const {name, price, id} = req.body;
        try {
            const drinksInfo = await Drink.findById(req.params.id)
            res.json(drinksInfo)
        } catch (error) {
            res.json(`${error.message}: Ошибка при подробной информации о конкретном напитке`)
        }
    },
    
    addDrinks: async (req, res) => {
        const {name, price, isThereDrinkAvailable, coffeine, volume, descriptionВrink} = req.body;
        try {
            await Drink.create({
                name,
                price,
                isThereDrinkAvailable,
                coffeine,
                volume,
                descriptionВrink
            })
            res.json("Напиток добавлен")
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавление нового напитка`)
        }
    },
    deleteDrinks: async (req, res) => {
        try {
            await Drink.findByIdAndRemove(req.params.id)
            res.json("Напиток удален")
        } catch (error) {
            res.json(`${error.message}: Ошибка при удаление конкретного напитка`)
        }
    },
    patchDrinks: async (req, res) => {
        try {
            const {name, price, isThereDrinkAvailable, coffeine, volume, descriptionВrink} = req.body;
            await Drink.findByIdAndUpdate(req.params.id, {
                $set: {name, price, isThereDrinkAvailable, coffeine, volume, descriptionВrink}
            })
            res.json("Напиток изменен")
        } catch (error) {
            res.json(`${error.message}: Ошибка при изменение конкретного напитка`)
        }
    }
}