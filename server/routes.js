import express from 'express'
import InventoryController from './controllers/inventoryController'

const routes = express()

routes.get('/rooms', InventoryController.index)
routes.post('/rooms', InventoryController.store)

routes.post('/rooms/availability', InventoryController.update)

export default routes