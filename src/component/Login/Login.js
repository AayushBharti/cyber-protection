import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import "../pan.css"
import Navbar from "../Navbar";
// import Profile from "../Profile/Profile";
const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } 
    else if(values.email!=="IndianPolice"){
      error.email="Incorrect ID";
    }
    else if(values.password!=="123456"){
      error.email="Incorrect Password";
    }
    // else if (!regex.test(values.email)) {
    //   error.email = "Please enter a valid email address";
    // }
    
    else if (!values.password) {
      error.password = "Password is required";
    }
    else{
    navigate("/homepage");
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);

    
  
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        setUserState(res.data.user);
        navigate("/", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <div>
      <Navbar/>
          <div className="relative wrapper w-full h-[980px] flex justify-center items-center">
      
      <div  className="content-wrapper ">
      <div className="imge mr-32 scale-150" style={{height:"8rem",width:"6rem",backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundImage:'url("https://pngimg.com/uploads/coat_arms_india/coat_arms_india_PNG10.png")',}}>
      </div>
      </div>
         
    <div className={loginstyle.login}>
   
      <form className="">
        <h1 className="text-3xl">Login</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="User Id"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      {/* <NavLink to="/signup" className="link">Not yet registered? Register Now</NavLink> */}
    </div>
    </div>
    </div>
  );
};
export default Login;
