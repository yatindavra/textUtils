// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <div className="blank">
  <Navbar title="Text Utilities"/>
  <div className="container">
  <TextForm heading="Enter The Text to Analyze"/>

  </div>
   </div>
  );
}

export default App;
