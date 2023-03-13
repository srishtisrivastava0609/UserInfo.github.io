import React,{useState} from 'react'
import "./Style.css";

export default function Contact(){
    const[user,setUser]=useState({
        name:"",email:"",dob:"",pass:"", conpass:"", gender:"", phone:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value});
    }
    const PostData =async(e)=>{
       e.preventDefault();
       const{ name,email,dob,pass, conpass, gender, phone}=user;
       const res=await fetch("/submit")
    
    
           
    }
    
    return(
       
             
        <div class="container">
        <div class="cover">
          <div class="front"  alt="">
          </div>
        </div>
        <div class="forms">
            <div class="form-content">
              
        
          </div>
            <div class="signup-form">
              <div class="title">USER <span class="log">INFO</span></div>
            <form method='POST'>
                <div class="input-boxes">
                  <div class="input-box">
                    
                    <input type="text" name="name" value={user.name} onChange={handleInputs} placeholder="Enter your name" required/>
                  </div>
                  <div class="input-box">
                    
                    <input type="email" name="email" value={user.email} onChange={handleInputs}  placeholder="Enter your email" required/>
                   </div>
                  <div class="input-box">
                    
                    <input type="Date" name="dob" value={user.dob} onChange={handleInputs} placeholder="Date OF Birth" required/>
                  </div>
                  <div class="input-box">
                    
                    <input type="password" name="pass" value={user.pass} onChange={handleInputs} placeholder="Enter your password" required/>
                  </div>
                  <div class="input-box">
                    
                    <input type="password" name="conpass" value={user.conpass} onChange={handleInputs} placeholder="Confirm your password" required/> 
                  </div>
                  <div class="input-box">
                    
                    <input type="text"  name="gender" value={user.gender} onChange={handleInputs} placeholder="Gender" required/>
                  </div>
                  <div class="input-box">
                    <input type="text" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone Number" required/>
                  </div>
                  <div>
                    <i class="input-box"></i>
                  </div>
                  <div class="button input-box">
                    <input type="submit" onClick={PostData } value="Sumbit"/>
                  </div>
                </div>
          </form>
        </div>
        </div>
        </div>
         
       
    
    )
}