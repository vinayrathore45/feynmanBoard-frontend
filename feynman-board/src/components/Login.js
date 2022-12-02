import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(email);
    try {
        const res = await axios({
            url : 'http://localhost:5000/loginUser',
            method : 'post',
            data : {
                email : email     
             }
          });
       
       //  set user to localstorage
          let user = res.data.user;
          localStorage.setItem("user" , JSON.stringify({id : user._id , isLoggedIn : true}));
          navigate('/dashBoard');
          setEmail("");
       } catch (error) {
         console.error(error);
     }

  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={submitHandler}>
      <h2>Login</h2>
        <label htmlFor="email">userName</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
       
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
