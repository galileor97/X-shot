class UserController{

static async signIn(req,res){
    try {

        res.render('signin')

    } catch (error) {
        res.send(error)
    }
}

static async signUp(req,res){
    try {
        console.log(req.body);
        res.render('signup')
    } catch (error) {
        res.send(error)
    }
}

}

module.exports = UserController