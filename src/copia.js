{/*}
import React, {useEffect, useState} from 'react';
import './App.css';
import ShowName from './Show/ShowName';

let cont = 1;
let newPag = "";
let windowPag = window.localStorage.getItem("actualPag");

function App() {

  const next = () =>{
    if(cont !== 9){
      cont += 1;
    }else{
      cont = 9;
    }
    nuevaPagina({pag: newPag});
    newPag = `http://swapi.dev/api/people/?page=${cont}`;
    window.localStorage.setItem("actualPag", cont);
    console.log(cont);
  }

  const back = () =>{
    if (cont === 1){
      cont = 1;
    }else{
      cont -= 1;
    }
    newPag = `http://swapi.dev/api/people/?page=${cont}`;
    nuevaPagina({pag: newPag});
    window.localStorage.setItem("actualPag", cont);
    console.log(cont);
  }

  const[pagActual, nuevaPagina] = useState({
    pag: `http://swapi.dev/api/people/?page=1`
  })




  //Almacenar en localstorage
  const setLocalStorage = (newName) =>{
    try{
      setNewName({name: newName});
      window.localStorage.setItem("actualName", newName);
    } catch (e){
      console.error(e);
    }
  }

  const [name, setName] = useState([]);

  const [actualName, setNewName] = useState(
    {name: window.localStorage.getItem("actualName")}
    );

  useEffect(() =>{
    console.log('useEffect');
    getData();
    
  }, [cont]);

  const getData = async () => {
    const data = await fetch(pagActual.pag);
    const dataObject = await data.json();
    const names = dataObject.results;
    setName(names);
    console.log(dataObject);
    console.log(names);
  };

  const switchNameHandler = (newName) => {
    //setNewName({name: newName});
    setLocalStorage(newName);
    console.log(newName);
  }

  return (
    <div className="App">
      <h1>Lista de nombres</h1>
      <ShowName name = {actualName.name}/>
      <ul>
        {
          name.map(item => (
            <li 
              className = "Person" 
              key={item.name}
              onClick = {switchNameHandler.bind(this, item.name)}>
              {item.name}
            </li>  
          ))
        }
      </ul>
      <button className="btn" onClick={back}>Back</button>
      <button className="btn" onClick={next}>Next</button>
    </div>
  );
}

export default App;
*/}
