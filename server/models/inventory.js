import mongoose from 'mongoose'

const inventory = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: Number,
    quantities: Number
})

const Inventory = mongoose.model('Inventory', inventory)

export default Inventory