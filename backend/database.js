const mysql = require("mysql2")
const { colors } = require("./colors")

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
connection.connect((err) => {
    if (err) {
        console.error(`\n -- ${colors.red}Error connecting to database, check your configuration${colors.reset}\n`)
        return
    }
    console.log(`\n -- ${colors.green}connected ${colors.white}to ${colors.yellow}${process.env.DB_NAME}${colors.reset} ${colors.white}database${colors.reset}\n`)
})

module.exports = connection