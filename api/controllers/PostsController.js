/**
 * PostsController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	newPost: function(req, res) {
		Posts.create(req.body).exec(function(err, posts) {
			if (err) return res.err({status: "err"});
			if (res) {
				return res.json(200, {
					status: "success",
					data: posts
				});
			}
		});
	}
};
