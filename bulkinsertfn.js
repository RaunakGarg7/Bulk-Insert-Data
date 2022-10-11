const Demo = require('./model')
const sequelize = require('sequelize');

const bulkInsertData = async() => {
    const dummy = [
        { id: 5, col1: 'ch5', col2: 'rn5', col3: 'sn5'},
        { id: 6, col1: 'ch6', col2: 'rn6', col3: 'sn6'}
    ]
    const query = await Demo.bulkCreate(dummy)
    if(query) console.log('data inserted')
    else console.log('data not inserted')
}

module.exports = { bulkInsertData }
