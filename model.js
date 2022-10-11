const Sequelize = require('sequelize');
const sequelize = require('./dbconfig');


const Demo = sequelize.define('demo1', {
    id : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true
    },
    col1: {
        type: Sequelize.DataTypes.CHAR,
        allowNull : false
    },
    col2: {
        type: Sequelize.DataTypes.CHAR,
        allowNull : false
    },
    col3: {
        type: Sequelize.DataTypes.CHAR,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
});

module.exports = Demo;