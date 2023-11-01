import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/context';

export default function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory()

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      console.log(result.user.uid);
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone
        }).then(() => {
          setError(null);
          history.push('/login');
        })
      })

    }).catch((e) => {
      setError(e.message)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="150px" height="150px" src={Logo} className='olxImage'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e) => { setPhone(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <p onClick={() => {
          history.push('/login')
        }} style={{ textAlign: 'center', cursor: 'pointer' }}>Login</p>
         {error && <p className='error' style={{ backgroundColor: 'blue', textAlign: 'center', color: 'white', padding: "10px", width:'200px' }}>{error}</p>}
      </div>
    </div>
  );
}
