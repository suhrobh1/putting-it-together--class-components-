import logo from './logo.svg';
import Persons from './components/Persons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Persons
        firstName = "Jane"
        lastName = "Doe"
        age = {45}
        hairColor = "Black"
      />
      <Persons
        firstName = "John"
        lastName = "Smith"
        age = {88}
        hairColor = "Brown"
      />
      <Persons
        firstName = "Millard"
        lastName = "Fillmore"
        age = {50}
        hairColor = "Brown"
      />
      <Persons
        firstName = "Maria"
        lastName = "Smith"
        age = {62}
        hairColor = "Brown"
      />
    </div>
  );
}

export default App;