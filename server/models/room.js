import mongoose from 'mongoose'

const room = mongoose.Schema({
    name: String,
    quantities: Number
})

const Room = mongoose.model('Room', room)

export default Room