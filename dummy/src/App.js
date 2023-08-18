
import './App.css';
import { useEffect,useState} from 'react';
   
function App() {
  
  const [text, setText] = useState('');
  const[name,setName] = useState('Harshal');
  //varaitation 1 -> Every Render
  // useEffect( () => {
  //     console.log("UI  RENDRING DONE");
  // });
  
  //varaition 2 -> First Render (2nd parameter rep the  dependencies list)
  // useEffect( () => {
  //   console.log("UI  RENDRING DONE");
  // },[]);

  //varation 3 -> First Render + whenever dependencies change
  //  useEffect( () => {
  //   console.log("Change obse")
  // }, [name]);
  //name  value change then run

  //varation 4 -> to handle unmounting of componet
  useEffect( () => {
      //add event listeneer
      console.log("listeneer added")

      return () => {
        console.log("listeneer removed");
      }
  },[text]);




  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  


  return (
    <div className="App">
     <input type = "text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
