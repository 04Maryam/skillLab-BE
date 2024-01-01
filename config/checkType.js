// Malware to check the user type

module.exports.checkType = function (requiredRole) {
    return async (req, res, next) => {
        if(requiredRole >= req.user.userType){
            next();
        }else{
            res.redirect("/main/?m=not_allowed");
        }
    }
}