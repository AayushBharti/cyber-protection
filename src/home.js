// import Login from './component/Login';
import Navbar from './component/Navbar';
import './App.css';
import PanAuth from './component/PanAuth';
import data from './component/data3.json'

function App() {
  return (
    <div className="relative">
      
      <div className='bg-black w-full'>
        <Navbar/>
      </div>
      <PanAuth data={data}/>
    </div>
  );
}

export default App;
