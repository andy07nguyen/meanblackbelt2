var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    session = require('express-session'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    bp       = require('body-parser'),
    app      = express();


app.use(express.static(path.join(root, 'client' )));
app.use(express.static(path.join(root, 'bower_components' )));

app.use(bp.json())

app.use(session({secret: 'codingdojorocks'}));  // string for encryption


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(port, function(){
  console.log( "server running on " + port);
});
