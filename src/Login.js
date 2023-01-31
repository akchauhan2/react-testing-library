import axios from "axios";
import React, { useState } from "react";
const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" +
          Math.ceil(Math.random() * 10)
      );

      setUser(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  console.log(user);

  return (
    <div className="container">
      <form>
        <span className="user">{user.name}</span>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
        />
        <button onClick={handleClick} disabled={!username || !password}>
          {loading ? "please wait" : "Login"}
        </button>
        <span
          style={{
            visibility: error ? "visible" : "hidden",
          }}
          className="error"
          data-testid="error"
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};
export default Login;
