import React, { useState } from "react";
import "./signup.css"


function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    institution: "",
    department: "",
    qualification: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    console.log("Form Data:", formData);
    // You can handle form submission here
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email id"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution Name"
          value={formData.institution}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department Name"
          value={formData.department}
          onChange={handleChange}
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
        <div className="button-group">
          <button type="button" className="signup-btn" onClick={handleSignUp}>
            Submit
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default SignUp;
