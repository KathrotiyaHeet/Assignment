import logo from './logo.svg';
import './App.css';
import Hooks from './Hooks';

function App(props) {
  return <li>I am a {props.brand}</li>;
}

<Hooks></Hooks>

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <App brand={car} />)}
      </ul>
    </>
  );
}

export default Garage;
