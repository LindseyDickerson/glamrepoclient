import React, {useState, useEffect} from 'react';


//import './App.css';
import Auth from './Components/Auth/Auth'
// import AddItems from './Components/Collection/AddItems'
// import ExistingCollection from './Components/Collection/ExistingCollection'
import GlamRepo from './assets/glamrepologo.png'
import CollectionIndex from './Components/Collection/CollectionIndex'



function App() {
  const [token, setToken] = useState(undefined)
  const [glam, setGlam] = useState({})
  if(token){
    console.log(token)
  }


  return (
    <div className="App">
      <img src={GlamRepo} alt='glamRepo logo' />
      
  { token ? <CollectionIndex token={token} setGlam={setGlam} /> :<Auth updateToken={setToken} />}
    </div>
  );
  


}

export default App;
