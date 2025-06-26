import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Ajax from './Ajax';
import Form from './Form';
import Home from './Home';
import List from './List';

function Home_data() {
  return <>
  <Home/><List/>
  </>;
}

function MobileList() {
  return <Ajax/>;
  // <h2>Mobile List Page</h2>;
}

function Form_data() {
  return <Form/>;
}

function App() {
  // const handleClick = () => {
  //   var name = document.getElementById('name').value;
  //   document.getElementById('nameis').innerHTML = name;
  // };


  return (
  <> 
  <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/MobileList">Mobile list</Link> | <Link to="/Form">Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home_data />} />
        <Route path="/MobileList" element={<MobileList />} />
        <Route path="/Form" element={<Form_data />} />
      </Routes>
    </Router>
{/* 
    <input type='text' class='form-control form-md' id='name'></input> 
    <button class='btn btn-primary bg-dark mybtn' onClick={handleClick}>Submit </button>
    <h1 id='nameis'></h1> */}
  </>
  );
}

export default App;