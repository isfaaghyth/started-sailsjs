/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getData: function(req, res) {
		Users.count({id: req.param('id')}).exec(function (err, found) {
			if (found > 0) {
				Users.find({id: req.param('id')}).exec(function (err, data){
					return res.json({
						status: "found",
						data: data
					});
				});
			} else {
				return res.ok({
					status: "not found"
				});
			}
		});
	}
};
