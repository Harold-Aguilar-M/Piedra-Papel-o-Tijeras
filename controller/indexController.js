exports.index = function(req, res, next){
    res.render('board', {
        title: 'Rock - Paper or Scissors',
        message: 'Hello World!'
    });
}