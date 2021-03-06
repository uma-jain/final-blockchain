import React, { useState,useEffect } from 'react';
import "./AdminLogin.css"
import { connect } from 'react-redux';
 
import {adminLogin} from "../../../redux/ActionCreaters/AdminActions"
 
const AdminLogin = (props) => {
 
    const [data,setData]=useState({
        email:"",
        password:""
    })
 
    const [emailError,setEmailError]=useState(null)
    const [passwordError,setPasswordError]=useState(null)
 
 
    useEffect(() => {
        if(  props.user.adminSignInError){
            setPasswordError(false)
        }
   
      },[ props.user.adminSignInError]);
 
    const AdminLoginClicked=()=>{
 
        console.log(data);
       
       
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(data.email.match(mailformat))
        {
            setEmailError(null)
             if(data.password.length > 4){
                 props.adminLogin(data.email,data.password,props.history)
               
             }else{
                setPasswordError("Invalid Password")
                setData({
                   ...data, password:""
                })
             }
           
 
        }else{
            setEmailError("Invalid Email")
        }
    }
        const onChangeHandler=(e)=>{
            setData({...data,[e.target.name]:e.target.value})    
 
}
    return (
 
       
<div class="d-flex mt-20">

    <h1 class="text-align-center color-green logo mt-20"> E - VOTING PORTAL ( Admin ) </h1>  
   
    <div class="form mt-20">
    <h1 class="text-align-center color-green sign-in"> SIGN IN</h1>
      <div class="input-field-cont">
       <i class="fa fa-user icon"></i>
       <input class="input-field"  type="text" placeholder="Email" name="email" value={data.email} onChange={(e)=>{onChangeHandler(e)}} />
       </div>
       <h4 class="color-green">{emailError}</h4>
     
       <div class="input-field-cont">
       <i class="fa fa-unlock-alt icon"></i>
       <input class="input-field" type="text" placeholder="Password" name="password" value={data.password} onChange={(e)=>{onChangeHandler(e)}} />
       </div>
       <h4 class="color-green">{passwordError}</h4>
 
       {  props.user.adminSignInError && <h4 class="color-green">{props.user.adminSignInError}</h4>     }
     
      <button class="signIn-btn btn text-align-center btn-bg-green" onClick={()=>{AdminLoginClicked()}}>SIGN IN </button>
     </div>
   
  
 
</div>
 
 
    );
};
const mapStateToProps=({user})=>{
    return {user}
  }
 
 
export default connect(mapStateToProps,{adminLogin})(AdminLogin);

