import React from 'react';
import TaskInput from './componenets/TaskInput';
import TaskList from './componenets/TaskList';
import Filter from './componenets/Filter';
import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskInput />
      <Filter />
      <TaskList />
    </div>
  );
};

export default App;
