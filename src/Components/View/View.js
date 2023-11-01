import React, { useEffect, useState, useContext } from 'react';

import './View.css';
import { PostContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Heart from '../../assets/Heart';
function View() {

  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory();

  useEffect(() => {

    const { userId } = postDetails
    firebase.firestore().collection('users').where("id", "==", userId).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      })
    })
  }, [])

  return (
    <div className="viewParentDiv">
      <div className=''><button className='button-12' onClick={() => history.push('/')}>Back</button></div>
      {
        !postDetails && history.push('/')
      }

        

      <div className="imageShowDiv">
        <img className='proImage'
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p style={{display:'inline'}}>&#x20B9;Price: {postDetails.price}</p> <span><Heart /></span>
          <span>Name : {postDetails.name}</span>
          <p>Category : {postDetails.category}</p>
          <span>{postDetails.date}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p style={{ fontWeight: 'bold' }}>Seller Details</p>
          <p style={{ fontWeight: 'bold' }}>UserName : {userDetails.username}</p>
          <p style={{ fontWeight: 'bold' }}>UserPhone : {userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
