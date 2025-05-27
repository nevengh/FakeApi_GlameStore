import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← مهم!
import { Container } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ← استخدمه للتوجيه

  const handleLogin = async (e) => {
    e.preventDefault();
  const credentials = { username: "johnd", password: "m38rmF$" };

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/"); // ← التوجيه إلى الصفحة الرئيسية
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <Container>
        <form className="form" onSubmit={handleLogin}>
          <p id="heading">Login</p>
          <div className="field">
            <input
              autoComplete="off"
              placeholder="Username"
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              placeholder="Password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn">
            <button type="submit" className="button1">Login</button>
            <button type="button" className="button2">Sign Up</button>
          </div>
          <button type="button" className="button3">Forgot Password</button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
