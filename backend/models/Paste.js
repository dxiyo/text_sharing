import mongoose from 'mongoose'
const { Schema } = mongoose
class Paste {
    static pasteSchema = new Schema({
        text: String,
        slug: String
    })

    static Paste = mongoose.model("Paste", this.pasteSchema, 'pasties')
}

export default Paste.Paste