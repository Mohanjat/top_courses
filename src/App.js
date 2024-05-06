import logo from './logo.svg';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import {apiUrl,filterData} from './data'
import './App.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


function App() {
   
  const [courses,setCourses] = useState(null);

  //category ke hisaab se element reder krne ke liye
  const [category,setCategory] = useState(filterData[0].title);
  
  //render hone se phle hme spinner show krna h
  const [loading, setLoading] = useState(true);
  //now api se data fatch kr lo
  //step1 == call the api using fecth() and storing response
  //step2 == convert reponse to json format and store all the data

  async function fetchData(){
    try{
      //loading tb tk true honi chahiye jb kuch render nhi hua ho
      setLoading(true);
       let reponse = await fetch(apiUrl);
       let output  = await reponse.json();
       //now store the output into setcourses
       setCourses(output.data);
       //yha pr response aa chuka hai and render bhi ho jayga to spinner gaayab ho jaana chahiye
       setLoading(false);
    }
    catch(error){
       toast.error("Network issue h bhai kuch der baad phir se kosis kre")
    }
  }

  //this api calling should be go through the use Effect
  //calling only once when 1 render is completed
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='app' >
      <div>
         <Navbar></Navbar>
      </div>

      <div>
        <Filter filterData={filterData} category = {category} setCategory = {setCategory} ></Filter>
      </div>

      <div>
        {
          loading ? (<Spinner></Spinner>):(<Cards courses = {courses} category = {category} ></Cards>)
        }
      </div>

    </div>
  );
}

export default App;
