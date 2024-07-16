"use client"
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import app from './Shared/firebaseConfig';
import { useEffect, useState,Suspense,useDeferredValue } from 'react';
import { useSearchContext } from './hooks/useSearchContext';
import PinList from './components/Pins/PinList';

export default function Home() {
  const db=getFirestore(app);
  const [listOfPins,setListOfPins]=useState([]);
  const {search} =useSearchContext();
  const defferredSearch = useDeferredValue(search);
  
  useEffect(()=>{
    getAllPins();
  },[])
  const getAllPins=async()=>{
    setListOfPins([])
      const q=query(collection(db,
        'pinterest-post')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
       
       
      setListOfPins((listOfPins)=>
      [...listOfPins,doc.data()]);
      });
  }

  const filteredData = listOfPins.filter((item)=>item.title.toLowerCase().includes(defferredSearch.toLowerCase()));
  console.log(defferredSearch)
  return (
    <>
    <div className='p-3'>
      <Suspense fallback={<h2>Loading...</h2>}>

      <PinList listOfPins={filteredData} />
      </Suspense>
    </div>
    </>
  )
}