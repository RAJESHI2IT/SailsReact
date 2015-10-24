module.exports = function(req, res, next) {
   if (req.session.authenticated) {
        return next();
    }
    else{
        return res.redirect('/login');
    }
};
