const express = require("express")
const bodyParser = require("body-parser")
const { Pool } = require("pg")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
})

app.post("/login", async (req, res) => {

  const username = req.body.username
  const password = req.body.password

  const query =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'"

  console.log("QUERY:", query)

  try {
    const result = await pool.query(query)

    if (result.rows.length > 0) {
      res.send("Login realizado! Bem vindo " + result.rows[0].username)
    } else {
      res.send("Usuário ou senha incorretos")
    }
  } catch (err) {
    res.send("Erro no servidor")
  }
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
