import logo from './logo.svg';
import './App.css';
import data from "./data";
function App() {
  const [person1,person2,person3,person4]=data;
  return (
    <div className="App">
      
      <h1>Display of name and id</h1>
      <br/>
      <hr></hr>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
        <tr>
          <td>{person1.id}</td>
          <td>{person1.name}</td>
        </tr>
        <tr>
        <td>{person2.id}</td>
        <td>{person2.name}</td>
        </tr>
        <tr>
        <td>{person3.id}</td>
        <td>{person3.name}</td>
        </tr>
        <tr>
        <td>{person4.id}</td>
        <td>{person4.name}</td>
        </tr>
      </table>
      <h3>Github-externship assignment - SOUMYA KUMARI</h3>
    </div>
  );
}

export default App;
