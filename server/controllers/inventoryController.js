import Room from '../models/room'
import Inventory from '../services/inventory'

const InventoryController = {}
const InventoryService = new Inventory()

InventoryController.index = (req, res) => {
    let inventories = InventoryService.getAll()

    inventories.then((docs) => {
        return res.status(200).json({
            data: docs
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

InventoryController.store = (req, res) => {
    let { name, quantities } = req.body
    let newInventory = InventoryService.add(name, quantities)
    
    newInventory.then((room) => {
        return res.status(201).json({
            data: room
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

InventoryController.update = (req, res) => {
    let { room, date, price, quantities } = req.body
    let availability = InventoryService.setAvailability(room, date, price, quantities)

    availability.then((doc) => {
        return res.status(201).json({
            data: doc
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: err
        })
    })
}

export default InventoryController