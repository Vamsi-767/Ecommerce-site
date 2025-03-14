import { useState } from "react";

const Prac=()=>{
    const[formData,setFormData]=useState(
        {
            fullname:'',
            email:'',
            password:'',
        }
    );
    const handleInput= (e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        });

    };
    
 // Handle sign-up form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up Data:', formData);
    // Process the form submission (e.g., send to server)
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};
export default Prac;