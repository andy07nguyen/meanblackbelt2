console.log("FROM ROUTES JS:");

var friends = require('../controllers/friends.js');

module.exports = function(app){
// ***************************FRIENDS-TABLE***************************** //
// INDEX SHOW:
app.get('/friends', function(req, res) {
  friends.index(req, res);
});
// SHOW:
app.get('/friends/:id', function(req, res) {
  // console.log("SERVER ROUTES: ", req.params.id)
  friends.show(req, res);
});
// CREATE:
app.post('/friends/new', function(req, res) {
  // console.log("SERVER ROUTES: ", req.body);
  friends.create(req, res);
});
// UPDATE: VOTE
app.put('/answers/like/:id', function(req, res) {
  // console.log("SERVER ROUTES: ", req.params.id, req.body.index)
  friends.update(req, res);
});
// DELETE:
app.delete('/friends/:id', function(req, res) {
  // console.log("SERVER ROUTES: ", req.params.id);
  friends.delete(req, res);
});
// ***************************ANSWERS-TABLE***************************** //
// INDEX SHOW:
app.get('/answers', function(req, res) {
  friends.indexAnswer(req, res);
});
// ADD ANSWER:
app.post('/answers/anwser', function(req, res) {
  // console.log("SERVER ROUTES: ", req.body);
  friends.addAnswer(req, res);
});


// ***************************LOGIN-TABLE***************************** //
// LOGIN:
app.post('/logins/login', function(req, res) {
  // console.log("SERVER ROUTES: ", req.body);
  friends.login(req, res);
});
// LOGIN INDEX: SHOW
app.get('/logins/loginuser', function(req, res) {
  friends.loginindex(req, res);
});

}
