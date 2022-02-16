import bcrypt from 'bcrypt'
import Paste from '../models/Paste.js'

export default class PasteController {

    static index = (req, res) => {
        res.json({message: "hey"})
    } 

    static store = async (req, res) => {
        // res.json({response: "wtf"})
        const text = req.body.text
        const slug = req.body.slug

        const hashedSlug = await bcrypt.hash( slug, 12 )

        const result = await Paste.create( { text, slug: hashedSlug } )

        res.status(200).json({result})
        // res.json({message: "hey"})
    } 

    static show = async (req, res) => {
        const hashedSlug = req.params.slug

        const paste = await Paste.find({slug: hashedSlug})

        res.status(200).json({paste})
    } 

    static update = async (req, res) => {
        const newText = req.params.text
        const hashedSlug = req.params.slug

        const paste = await Paste.find({slug: hashedSlug})

        paste.text = newText

        const updatedPaste = await Paste.updateOne(paste, { text: newText }, {new: true})

        res.status(200).json({updatedPaste})
    } 
}