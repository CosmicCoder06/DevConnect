const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  console.log("Protect middleware triggered");
  
  try {

    const token = req.cookies.token;
    
    if (!token) {
      console.log("No token found");
      return res.redirect("/login");
    }
    

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    

    const user = await User.findById(decoded.id);
    
    if (!user) {
      console.log("User not found");
      return res.redirect("/login");
    }
    

    req.user = user;
    console.log("User attached to request:", req.user);
    
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.clearCookie("token");
    res.redirect("/login");
  }
};