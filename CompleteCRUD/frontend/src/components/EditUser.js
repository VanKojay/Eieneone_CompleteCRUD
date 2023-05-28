import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [account, setAccount] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    if (event.target.checked) {
      setAccount(true);
      console.log("benar");
    } else {
      setAccount(false);
      console.log("salah");
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhoneNumber(response.data.phonenumber);
    setAccount(response.data.account);
    setBirthdate(response.data.birthdate);
    setGender(response.data.gender);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Account</label>
            <div className="control">
              <input
                type="checkbox"
                value={account}
                onChange={handleChange}
                checked={account}
              />
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
                placeholder="Birth Date"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
