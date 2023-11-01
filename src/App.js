import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignUp from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/context';
import Post from './store/postContext';

function App() {

  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <div>
      <Post>
        <Router>
          {/* signUp router */}
          <Route exact path='/'>
            <Home />
          </Route>
          {/* signUp router */}
          <Route path='/SignUp'>
            <SignUp />
          </Route>
          {/* signUp router */}
          <Route path='/login'>
            <Login />
          </Route>
          {/* Create router */}
          <Route path='/create'>
            <Create />
          </Route>
          {/* View router */}
          <Route path='/view'>
            <ViewPost />
          </Route>

        </Router>
      </Post>
    </div>
  );
}

export default App;
