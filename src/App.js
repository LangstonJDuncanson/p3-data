import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ClassList from './ClassList';
import DisplayStatProfile from './DisplayStatProfile';

function Header(){
  return (
    <div className='flex-column'>
    <h1>Perils Plights and Plunders</h1>
    <h2>Database</h2>
    </div>
  );
}

function App() {
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [subClassName, setSubClassName] = useState("");
  
  const handleClick = (event) => {
    const key = event.target.getAttribute('data-key');
    console.log(key);
   if (key === null){
    const mainKey = event.target.getAttribute('mainkey');
    const subKey = event.target.getAttribute('subkey');
    console.log(classData[mainKey]);
    console.log(classData[mainKey].Playstyles[subKey]);
    setSubClassName(classData[mainKey].Class);
    console.log(subClassName);
    setCurrentProfile(classData[mainKey].Playstyles[subKey]);
   } else {
    console.log(classData[key]);
    setSubClassName('');
    setCurrentProfile(classData[key]);
   }
    setShowComponent(true); // Update state to show the component
  };

  useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('./classData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setClassData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching JSON:', error);
      setLoading(false); 
    }
  }
  
  fetchData();
},[]);

if (loading) {
  return <p>Loading...</p>;
}

return (
  <>
  <Header />
  <div className='flex-row'>
  {classData ? (
       <ClassList classInfo={classData} buttonClick={handleClick}/>
      ) : (
        <p>No data available</p>
      )}
  {showComponent && <DisplayStatProfile currentProfile={currentProfile} subName={subClassName}/>}
    </div>
  </>

)
  
}

export default App;