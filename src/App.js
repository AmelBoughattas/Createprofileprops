import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/Profile';
import logo from './123.png';
function App() {
  const handlerName = () =>
  {
    alert('Welcome ! this is the profile of Amel boughattas');
  }
  return (
    <div className="App">
      <Profile alertName={handlerName}>
      <img src={logo} alt="" className="logo" style={{margin:"6em 0 0 100px"}}/>  
      </Profile>
    </div>
  );
}

export default App;
