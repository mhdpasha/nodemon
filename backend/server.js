const express = require("express")
const cors = require("cors")
const page = require("./page")
const port = 4000

const app = express()
const index = page.getIndexPage()

app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: "GET, POST",
    allowedHeaders: "Content-Type, Authorization"
}))
app.use(express.urlencoded())
app.listen(port, () => { console.log(`server running at port: ${port}`) })

const dataJawir = [
    { id: 1, name: 'Yanto Kapal', age: 37 },
    { id: 2, name: 'Surya Danil', age: 25 },
    { id: 3, name: 'Ilham Asomething', age: 35 },
    { id: 4, name: 'Umang Lalah', age: 23 },
    { id: 5, name: 'Napi Sambal Ijo', age: 22 }
]

// API Endpoints
app.get("/", (_, res) => {
    res.status(200).send(index)
})

app.get("/jawir", (req, res) => {
    res.set('Content-Type', 'application/json')

    try {

        const { limit, offset = 0 } = req.query
        
        const limitNum = limit ? parseInt(limit) : dataJawir.length
        const offsetNum = parseInt(offset)
        
        const filtered = dataJawir.slice(offsetNum, offsetNum + limitNum)
        
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
        const data = dataJawir.find(item => item.id === id)
        
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
