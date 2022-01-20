import react from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';



const HatsPage =props=>{
  console.log(props);
  return(
    <div>
<h1>HATS PAGE </h1>
</div>
  );

};


const TopicsList =()=>(
  <div>
  <h1>TOPIC LIST PAGE</h1>
  </div>
  );

  const TopicDetail =(props)=>{
  console.log(props);
  return(
    <div>
    <h1>TOPIC DETAIL PAGE</h1>
    </div>
    );
  };

function App() {
  return (
    <div className='App'>
    <Routes>
     <Route  path='/' element={<HomePage/>}/>
     <Route exact path='/hats' element={<HatsPage/>}/>
     <Route exact path='/topics' element={<TopicsList/>}/>
     <Route exact path='/topics/:topicId' element={<TopicDetail/>}/>
     </Routes>
    </div>
  );
}

export default App;
