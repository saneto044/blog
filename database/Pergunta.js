const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
    titulo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});
Pergunta.sync({force:false}) // Caso a tabela não exista ele cria já que passei o parâmetro flase
module.exports = Pergunta ;