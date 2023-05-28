import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [account, setAccount] = useState("user");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
      setAccount(true);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        phonenumber,
        account,
        birthdate,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="813XXXXXX"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Type Account</label>
            <div className="control">
              <input type="checkbox" value={account} onChange={handleChange} />
              Admin
            </div>
          </div>

          <div className="field">
            <label className="label">Birth Date</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="BirthDate"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
