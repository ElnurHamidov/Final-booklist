import './App.css';
import LogIn from './LogIn.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './Registration';
import Main from './Main';
import Add from './Add';
import Edit from './Edit';
import {useState} from 'react';
import Context from './Context';

function App() {

  const [edit, setEdit] = useState({});

  const onEdit=obj=>{
    setEdit(obj);
  }
  
  const obj={
    onEdit,
  }

  return (
    <Context.Provider value={obj}>
        <div className='container-fluid bg-secondary' style={{padding: '0px'}}>
          
          <Router>

            <Routes>
                <Route path="/books" element={<LogIn />}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/books/main" element={<Main />}/>
                <Route path="/add" element={<Add/>} />
                <Route path="/edit" element={<Edit value={edit}/>}/>
            </Routes>

          </Router>

        </div>
    </Context.Provider>
  );
}

export default App;
