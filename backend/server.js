require('dotenv').config()

const express = require("express")
const cors = require("cors")
const page = require("./page")
const database = require("./database")
const { body, validationResult } = require("express-validator")
const { data } = require("./static-data")
const { colors } = require("./colors")

const port = process.env.PORT
const app = express()
const index = page.getIndexPage()


app.use(cors({
    methods: "GET, POST",
}))
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n -- ${colors.white}server running at ${colors.cyan}http://localhost:${port}${colors.reset}`))



// API Endpoints
app.get("/", (_, res) => {

    try {
        res.status(200).send(index)
    } catch (err) {
        console.error(`Error occured while fetching 'index': ${err}`)
        res.status(500).json({ err: `Internal server error` })
    }
})

app.get("/jawir", (req, res) => {

    try {
        const { limit, from } = req.query
        const limitNum = limit ? parseInt(limit) : data.length
        const fromNum = from ? parseInt(from) - 1 : 0

        const query = `SELECT * FROM jawir LIMIT ?, ?`
        database.query(query, [fromNum, limitNum], (error, results) => {
            if (error) {
                console.error('Error occurred while fetching data from MySQL:', error)
                res.status(500).json({ error: 'Internal server error' })
                return
            }
            res.status(200).json(results)
        })
    } catch (err) {
        console.error(`Error occurred while fetching 'jawir' data: ${err}`)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.get('/jawir/:id', (req, res) => {

    try {
        const id = parseInt(req.params.id)

        const query = `SELECT * FROM jawir WHERE id = ?`
        database.query(query, [id], (error, results) => {
            if (error) {
                console.error('Error occurred while fetching data from MySQL:', error)
                res.status(500).json({ error: 'Internal server error' })
                return
            }
            if (results.length > 0) {
                res.status(200).json(results[0])
            } else {
                res.status(404).json({ error: 'Data not found' })
            }
        })
    } catch (err) {
        console.error(`Error occurred while fetching 'jawir' data by ID: ${err}`)
        res.status(500).json({ error: 'Internal server error' })
    }
})

app.post("/jawir", [
    
    body("name").trim().isLength({ min: 1 }).escape(),
    body("age").trim().isInt({ min: 1 }).toInt()

], (req, res) => {
    res.set('Content-Type', 'application/json')

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, age } = req.body
    const id = data.length + 1

    // In development

    data.push({ id, name, age })
    res.status(201).json({ id, name, age })
})