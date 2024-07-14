"use client"
import { collection, getDocs,getDoc,doc, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import app from '../Shared/firebaseConfig';
import UserInfo from '../components/UserInfo';
import PinList from './../components/Pins/PinList'

function Profile({params}) {
  const db= getFirestore(app);
  const [userInfo,setUserInfo]=useState();
  const [listOfPins,setListOfPins]=useState([]);

  useEffect(() => {
    console.log(params.userId.replace('%40','@'))
    if({params}){
      getUserInfo(params.userId.replace('%40','@'))
    }
  }, [params])


  const getUserInfo=async(email)=>{
    const docRef = doc(db, "user",email );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }

  useEffect(()=>{
     if(userInfo){
       getUserPins();
     }
  },[userInfo])

  const getUserPins=async()=>{
     setListOfPins([])
      const q=query(collection(db,'pinterest-post')
      ,where("email",'==',userInfo.email));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setListOfPins(listOfPins=>[...listOfPins,doc.data()]);
      });
  }

  return (
    <div>
     {userInfo?
      <div>
        <UserInfo userInfo={userInfo} />
        <PinList listOfPins={listOfPins}  />
      </div> 
      :null}
    </div>
  )
}

export default Profile
