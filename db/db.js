  
const sequelize = require('sequelize')
const db = {}
const seq = new sequelize("sql7391989", "sql7391989", "iWv7fW6iSL", {
	host: "sql7.freemysqlhosting.net",
	port: "3306",
	dialect: "mysql"
})
db.seq = seq
module.exports = db;
