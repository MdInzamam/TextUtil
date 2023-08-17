import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title= "TextUtil" AboutText= "About us"/>
    <div className='container my-3 bg-success p-3'>
    <TextForm heading = "Text hear "/>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default App;
