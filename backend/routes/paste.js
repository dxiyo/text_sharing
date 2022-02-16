import express from 'express'
import PasteController from '../controllers/paste.js'
import bodyParser from 'body-parser'
const json = bodyParser.json()

const router = express.Router()

router.get('/', PasteController.index)
router.post('/', json, PasteController.store)
router.get('/:slug', PasteController.show)
router.put('/:slug', json, PasteController.update)

export default router