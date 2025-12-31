const express = require('express')
const router = express.Router()

const { createNote, getNotes } = require('../controllers/noteController')

// POST /notes - create a new note
router.post('/', createNote)

// GET /notes - get all notes
router.get('/', getNotes)

module.exports = router