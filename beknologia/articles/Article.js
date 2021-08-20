const Sequelize = require ('sequelize')
const connection = require ('../../utils/database')

const Article = connection.define('articles', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Article.sync({force: false})
    .then(() => {})
    .catch(err => console.error);

module.exports = Article;