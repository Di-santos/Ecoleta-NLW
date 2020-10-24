// Importar a dependência do SQLite
const sqlite3 = require("sqlite3").verbose();

// Criar o objeto que irá operar o banco de dados
const db = new sqlite3.Database("./src/database/database.db");

// Exportar o banco
module.exports = db



// Configura e utiliza o abjeto alterador do banco de dados com comandos SQL
/*db.serialize(() => {

  // Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            adress TEXT,
            phone TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

  // Inserir dados na tabela

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
        "https://images.unsplash.com/photo-1522924398849-9b6520f15c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "Tech Net",
        "Rua Jaburus, 378",
        "12 997574127",
        "Rio de Janeiro",
        "Angra dos Reis",
        "Resíduos eletrônicos, Lâmpadas"
    ]

    function depoisCadastrado(erro){
        if (erro){
            return console.log(erro)
        }
        else{
            console.log("cadastrado com sucesso")
            console.log(this)
        }
    }

    db.run(query, values, depoisCadastrado)

    
    // Consultar dados na tabela
    db.all(`SELECT * FROM places`, function(erro, rows){
        if (erro){
            return console.log(erro)
        }
        else{
            console.log("registros:")
            console.log(rows)
        }
    })

    // Excluir dados na tabela
    db.run(`DELETE FROM places WHERE id = ?`, [2], function(erro){
        if (erro){
            return console.log(erro)
        }
        else{
            console.log("deletado!")
        }
    })


});
*/
// Excluir dados na tabela
db.run(`DELETE FROM places WHERE id = ?`, [11], function(erro){
    if (erro){
        return console.log(erro)
    }
    else{
        console.log("deletado!")
    }
})