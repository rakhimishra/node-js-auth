const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
function initialize(passport){
    const authenticatedUser=async(email,password,done)=>{
        const user = getUserByEmail(email);
        if(user===null)
        {
            //done(error,isuerauthenticated:boolean, meassage)
            return done(null,false,{message:"no user with that email found"});
        }
        try{
            if(await bcrypt.compare(password,user.password)){
                return done(null,user)
            }
            else{
                return done(null,false,{message:"password does not match"});
            }
        }
        catch(err){
            return done(err);
        }
    }
    passport.use( new LocalStrategy({username:"email"}),authenticatedUser);
    //to do this
    //passport.serializeruser((user,done)={})
}
