import { useState } from "react";

export default function Challenge1Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>([]);
  const [isValid, setIsValid] = useState(false);

  const validateForm = (
    emailValue = email,
    passwordValue = password,
    confirmPasswordValue = confirmPassword
  ) => {
    const e: any = {};

    if (!emailValue.includes("@")|| !emailValue.includes(".")) {
      e.email = "Invalid email";
    }

    if (passwordValue.length < 8) {
      e.password = "Password must be at least 8 characters";
    } else if (!/[0-9]/.test(passwordValue)) {
      e.password = "Password must contain at least one number";
    } else if (!/[^A-Za-z0-9]/.test(passwordValue)) {
      e.password = "Password must contain at least one special character";
    
    }
    if (confirmPasswordValue && passwordValue !== confirmPasswordValue) {
      e.confirmPassword = "Passwords do not match";
    }

    setErrors(e);
    setIsValid(Object.keys(e).length === 0);
  };
      return (
        <div>

          <input type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateForm(e.target.value, password, confirmPassword);
          }}
  />

  <br />
  {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
  
          <input type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validateForm(email, e.target.value, confirmPassword);
          }}
  />
  <br />
  {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          <input type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateForm(email, password, e.target.value);
          }}
  />
  {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
  <br />
          <button disabled={!isValid}>Submit</button>
        </div>
      )
  }