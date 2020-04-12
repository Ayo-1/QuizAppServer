  
const sequelize = require('sequelize')
const db = {}
const seq = new sequelize("RsCued9YdZ", "RsCued9YdZ", "yTHiaxWl6g", {
	host: "remotemysql.com",
	port: "3306",
	dialect: "mysql"
})
db.seq = seq
module.exports = db;
