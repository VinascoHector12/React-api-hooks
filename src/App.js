import React, {useEffect, useState} from 'react';
import './App.css';
import ShowName from './Show/ShowName';

let cont = window.localStorage.getItem("pageNumber");

function App() {

  if(cont === null){
    cont = 1;
  }else
  cont = cont;

  //Petición a la API
  const getData = async () => {
    const data = await fetch(`http://swapi.dev/api/people/?page=${cont}`);
    const dataObject = await data.json();
    const names = dataObject.results;
    const nextPage = dataObject.next;
    const prevPage = dataObject.previous;
    
    console.log(dataObject);

    //Enviar nuevo estado al estado con los nombres, pagina siguiente y pagina previa.
    setState({
      name: names,
      next: nextPage,
      prev: prevPage
    });
  };

  //El estado de la pagina que me permitira estar cambiando la información
  const [actualState, setState] = useState({
    name: [],
    next: "",
    prev: ""
  })

  //Primer "efecto" para renderizar el listado de nombres (este dependera del cambio de pagina)
  useEffect(() =>{
    getData();
  }, []);

  //Almacenar nombre en localstorage
  const setLocalStorage = (newName) =>{
    try{
      setNewName({name: newName});
      window.localStorage.setItem("actualName", newName);
    } catch (e){
      console.error(e);
    }
  }

  //Almacenar numero de pagina en localstorage
  const setNumberStorage = (pageNumber) =>{
    try{
      window.localStorage.setItem("pageNumber", pageNumber);
    } catch (e){
      console.error(e);
    }
  }

  //Estado que almacena el nombre de estado seleccionado
  const [actualName, setNewName] = useState(
    {name: window.localStorage.getItem("actualName")}
    );

  //Funcion que almacena el nombre seleccionado en el local storage.
  const switchNameHandler = (newName) => {
    //setNewName({name: newName});
    setLocalStorage(newName);
    console.log(newName);
  }

  //Funcion para avanzar de pagina
  const next = () => {
    if(actualState.next !== null){
      cont ++;
      getData();
    } else{
      cont = cont;
    }
    setNumberStorage(cont);
    console.log(cont);
    console.log(actualState.next);
  }

  //Funcion para retroceder de pagina
  const prev = () => {
    if(actualState.prev !== null){
      cont --;
      getData();
    } else{
      cont = cont;
    }
    setNumberStorage(cont);
    console.log(cont);
    console.log(actualState.prev);
  }

  return (
    <div className="App">
      <h1>Lista de nombres</h1>
      <ShowName name = {actualName.name}/>
      <ul>
        {
          actualState.name.map(item => (
            <li 
              className = "Person" 
              key={item.name}
              onClick = {switchNameHandler.bind(this, item.name)}>
              {item.name}
            </li>  
          ))
        }
      </ul>
      <p>Pagina actual: {cont}</p>
      <button className="btn" onClick={prev}>Back</button>
      <button className="btn" onClick={next}>Next</button>
    </div>
  );
}

export default App;

