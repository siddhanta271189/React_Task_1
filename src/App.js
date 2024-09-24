import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataTable from './DataTable';
const data = [
  { id: 1, name: 'Rashmi', age: 41 },
  { id: 2, name: 'Ranjan', age: 40 },
  { id: 3, name: 'Ranasingh', age: 39 },
];
function App() {
  return (
    <div className="App">
      <h1>Data Table</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;

