// Importar a dependência do Express, criar o servidor e habilitar formulários POST
const express = require("express")
const server = express()
server.use(express.urlencoded({extended:true}))

// Puxar o banco de dados do outro "export"
const db = require("./database/db")

// Atribuir a porta 3000 ao servidor
server.listen(3000)

// Torna a pasta "public" estática (invisível)
server.use(express.static("public"))

// Importa e configura o nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configurando as rotas do app / Request e Response
server.get("/", (req, res) => {
    return res.render("index.htm")
})


server.get("/cadastro", (req, res) => {
    return res.render("cadastro.htm")
})

server.post("/cadastrocheck", (req, res) =>{

    const query = `
     INSERT INTO places(
         image,
         name,
         adress,
         phone,
         state,
         city,
         items

     ) VALUES (?,?,?,?,?,?,?); 
    `    
        
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.phone,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function depoisCadastrado(erro){
        if (erro){
            return console.log(erro)
        }
        else{
            return res.render("cadastro.htm", {saved:true})
        }
    }

    db.run(query, values, depoisCadastrado)


})

server.get("/resultados", (req, res) => {

    const search = req.query.search

    if (search == ""){
    // Importar do banco de dados
    db.all(`SELECT * FROM places`, function(erro, rows){
        if (erro){
            return console.log(erro)
        }
        
        const total = rows.length
        return res.render("resultados.htm", {places: rows, total: total})
    })
    }

    else{
        db.all(`SELECT * FROM places WHERE city = '${search}'`, function(erro, rows){
            if (erro){
                return console.log(erro)
            }
            
            const total = rows.length
            return res.render("resultados.htm", {places: rows, total: total})
    
    
}) 
}
})