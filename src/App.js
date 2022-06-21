// App.js
import React from 'react';
import './App.css';
import BasicTableComponent from './components/basicTable.js';

function App() {

  return (
    <div className="App">

      <h3>Basic Table using <code>react-table</code></h3>

      <BasicTableComponent />

    </div>
  );
}

export default App;