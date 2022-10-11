const sequelize = require('./dbconfig.js');
const { bulkInsertData } = require('./bulkinsertfn');

sequelize
    .sync()
    .then(result => {
        console.log('Connected!!');
    })
    .catch(err => console.log(err)
);


bulkInsertData();




