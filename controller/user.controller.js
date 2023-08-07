const UserServices = require("../services/user.service");

exports.register = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      
      console.log(req.body);
  
      const successRes = await UserServices.registerUser(email, password);
  
      res.json({ status: true, success: "User Registered Successfully" });
    } catch (error) {
      // Add proper error handling here
      console.error(error); // Print the error for debugging purposes
      res.status(500).json({ status: false, error: "User Registration Failed" });
    }
  };
  