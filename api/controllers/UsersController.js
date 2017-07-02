/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getData: function(req, res) {
		Users.find({id: req.param('id')}).exec(function (err, data){
			return res.json(data);
		})
	}
};
