//added for mailer///
import React, { useState } from "react";
import { axiosInstance } from "../../config";
///added for mailer///
import "./contact.css";

export default function Contact() {
 //added for mailer//
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail]= useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");

  const handleSend = async() => {
    setSent(true);
    try{
      await axiosInstance.post("http://localhost:4000/send_mail",{
        text,
        name,
        email,
        tel,
      });
    }catch(err){
      console.log(err)
    }
  }

//added for mailer//  
  return (
        <div className='contact'>
            <span className="contactTitle">Contact Us</span>
            <p className="contactInfo">We look forward to hearing from you, Please provide the following information</p>
            {!sent ? (

                <form className="contactForm" onSubmit={handleSend}>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name}
                    className="contactInput" 
                    placeholder="Enter your Name" 
                    required="true"
                    onChange={(e)=>setName(e.target.value)}
                    />
                <label>Email</label>
                <input 
                    type="email" 
                    value={email}
                    className="contactInput" 
                    placeholder="Enter your Email" 
                    required="true"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <label>Phone Number</label>
                <input 
                    type="tel" 
                    value={tel}
                    className="contactInput" 
                    placeholder="Enter Contact Number" 
                    required="true"
                    onChange={(e)=>setTel(e.target.value)}
                    />
                <label>Description</label>
                <textarea 
                    placeholder="Provide details here..." 
                    type="text" 
                    value={text}
                    className="constactTextDesc"
                    rows="8"
                    cols="40"
                    required="true"
                    onChange={(e)=>setText(e.target.value)}
                    >
                </textarea>
                <button className="contactButton" type="submit">Submit</button>
            </form>
            ) : (
                <h1>Thank you! Your Email was Sent</h1>
            )}
        </div>
        );
}
