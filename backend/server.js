const express = require("express")
const cors = require("cors")
const page = require("./page")
const { data } = require("./static-data")

const port = 4000
const app = express()
const index = page.getIndexPage()

app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: "GET, POST",
    allowedHeaders: "Content-Type, Authorization"
}))
app.use(express.urlencoded())
app.listen(port, () => console.log(`server running at port: ${port}`))



// API Endpoints
app.get("/", (_, res) => {
    res.status(200).send(index)
})

app.get("/jawir", (req, res) => {
    res.set('Content-Type', 'application/json')

    try {

        const { limit, from } = req.query
        
        const limitNum = limit ? parseInt(limit) : data.length
        const fromNum = from ? parseInt(from) - 1 : 0
        
        const filtered = data.slice(fromNum, fromNum + limitNum)
        
        res.status(200).json(filtered)

    } catch (err) {

        console.error(`Error occured while fetching 'jawir' data: ${err}`)
        res.status(500).json({ err: `Internal server error` })

    }
})

app.get('/jawir/:id', (req, res) => {
    res.set('Content-Type', 'application/json')

    try {

        const id = parseInt(req.params.id)
        const data = data.find(item => item.id === id)
        
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ error: 'Data not found' })
        }

    } catch (err) {

        console.error(`Error occured while fetching 'jawir' data by ID: ${err}`)
        res.status(500).json({ err: `Internal server error` })

    }
});
