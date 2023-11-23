import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import TaskList from './components/TaskList';

export const URL = process.env.REACT_APP_SERVER_URL
console.log('URL', URL);
function App() {
  return (
    <div className='container'>
      <TaskList />
    </div>
  );
}

export default App;
