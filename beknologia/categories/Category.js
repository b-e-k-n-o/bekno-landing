const Sequelize = require ('sequelize')
const connection = require ('../../utils/database')

const Category = connection.define('categories', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.sync({force: false})
    .then(() => {})
    .catch(err => console.error);

module.exports = Category;