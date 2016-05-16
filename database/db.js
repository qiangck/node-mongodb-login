var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1/test');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	name: String,
	password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.user = db.model('users', userScheMa); //  与users集合关联