const express = require('express');
const Book = require('../models/bookModel');
const router = express.Router()
// _________________________________________________
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ count: books.length, data: books })
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
})
// ______________________________________________________
router.post('/', async (req, res) => {
    const { title, author, publishYear } = req.body;
    if (!title, !author, !publishYear) {
        return res.status(400).send({ messege: "All the 3 element is required" })
    }
    const newbook = new Book({
        title: title,
        author: author,
        publishYear: publishYear
    });
    try {
        await newbook.save()
        res.status(201).send(newbook)

    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
})
// ___________________________________________

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let newbook = await Book.findById(id);
        res.status(201).json(newbook)
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
})
// __________________________________________________
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;
    try {
        if (!title, !author, !publishYear) {
            return res.status(400).send({ messege: "All the 3 element is required" })
        }
        let newbook = await Book.findByIdAndUpdate(id, req.body);
        if (!newbook) {
            return response.status(404).json({ message: 'Book not found' });
        }
        res.status(201).json({ messege: 'Book is updated' })
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }
})
// ______________________________________________________
router.delete('/:id',async (req, res) => {
    const {id}=req.params;
    try {
        let delebook=await Book.findByIdAndDelete(id);
        if(!delebook){
           return res.json({message:'book not fiund'})
        }
        return res.status(201).send({message:"book is deleted successfully"})
    } catch (error) {
        res.status(500).json({ messege: error.messege })
    }

})

module.exports = router;