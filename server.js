var express = require('express');

var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));
app.get('*',function(req,res){
	res.render('index');
});
<<<<<<< HEAD
app.listen(process.env.PORT || 3000 );
=======
app.listen(3000 || process.env.PORT);
>>>>>>> 21f9141f48fad2e6feb2dc38082c28993b50e49f
