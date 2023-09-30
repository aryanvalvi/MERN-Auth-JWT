import React, { useEffect, useState } from "react";

const CreateAccount = () => {
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
      <h1>Cretae a account</h1>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          name="name"
          id="name"
        />
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

export default CreateAccount;
