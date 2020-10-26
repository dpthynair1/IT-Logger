import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/tech/AddTechModal'
import Logs from './components/logs/Logs'



import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize'
import './App.css';

const App = () =>{

  useEffect(() => {

    // Init materialize JS

    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
       <AddLogModal />
       <EditLogModal />
       <AddTechModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
