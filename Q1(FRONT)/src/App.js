import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}
function MyComponent() {
  const [inputmessage, setinputmessage] = useState("");
  const [list, setlist] = useState([]);

  const processinputmessage = (e) => {
    const newinputmessage = e.target.value;
    setinputmessage(newinputmessage);
  };

  const addUser = () => {
    const url = "http://localhost:6100/addNewUser";
    const body = {
      inputmessage: inputmessage,
    };
    axios.post(url, body);
    setinputmessage("");
  };

  const getUser = async () => {
    const url = "http://localhost:6100/userList";
    let result = await axios.get(url);
    let list = result.data;
    setlist([...list]);
  };

  useEffect(() => getUser());

  return (
    <div>
      <h1 className="alert alert-dark test-light">My Chat App</h1>
      <h3 className="alert alert-dark test-light">by MANOJ MORE 061 KH</h3>
      <div className="row">
        <div className="col-6 ml-5">
          <input
            className=" m5 p-2  w-100 text-align:center border border-secondary border-rounded mr-4"
            type="text"
            value={inputmessage}
            placeholder="Lets Chat Here"
            onChange={processinputmessage}
          />
        </div>
        <div className="col-6">
          <button
            className="m5 p-2 w-100 text-align:center border border-secondary"
            onClick={addUser}
          >
            Send
          </button>
        </div>
      </div>

      <div>
        {list.map((item, index) => (
          <div className="alert alert-secondary fs-4 m-1 p-2">
            {item.inputmessage}
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
