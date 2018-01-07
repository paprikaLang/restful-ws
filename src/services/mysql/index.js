

const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'restful_ws'
})

const categories = new Promise((resolve,reject) => {
	connection.query('SELECT * FROM categories',(error,results) => {

	if (error) {
		reject(error)
	}
	resolve({ pagination: {page: 2, results: results.length}, categories:results })

   })
})

module.exports = categories