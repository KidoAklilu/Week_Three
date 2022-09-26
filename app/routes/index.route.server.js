// index route
import { Router } from 'express'

import { helloWorld } from '../controllers/index.controller.server.js'

const router = Router()

router.get('/', helloWorld)
router.get('/hello', helloWorld)

export default router
