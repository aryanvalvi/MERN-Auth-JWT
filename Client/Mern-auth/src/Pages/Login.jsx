import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleSubmit = (e) => {
    preventDeault(e);
    console.log(data);
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={HandleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          name="password"
          id="password"
        />
        <button> CREATE</button>
      </form>
    </div>
  );
};

export default Login;
