import logo from './logo.svg';
import './App.css';

const App = () => {
  return(
    <>
      <h1>Greetings</h1>
      <Hello name = "Yannic" />
      <Hello name = "Ismail" />
      <Hello name ="Baran" />
    </>
  )
}

const Hello = (props) => {
  let a;

  if(props.name == "Ismail"){
    a = "Ismail ist ein Hund"  
  }

  else{
    a = "einen schönen Tag noch"
  }
  
  console.log(props);
  console.log(props.name);
  return(
    <>
      <p>Hello {props.name + ", " + a.toString()}</p>
    </>
  )
}

export default App;
