import RoomModel from '../models/room'
import InventoryModel from '../models/inventory'

class Inventory {
    getAll() {
        return RoomModel.find()
            .exec()
    }

    add(name, quantities) {
        let room = new RoomModel({
            name,
            quantities
        })

        return room.save()
    }

    setAvailability(roomId, date, price, quantities) {
        let inventory = new InventoryModel({
            roomId,
            date,
            price,
            quantities
        })

        return inventory.save()
    }
}

export default Inventory