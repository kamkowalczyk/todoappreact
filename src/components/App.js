import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';


class App extends Component {
  counter = 3;
  state = {
    tasks:[
        {id:0,
        text: 'zagrac wreszcie w Wiedzmina 3',
        date: '2018-02-15',
        important:false,
        active:true,
        finishDate:null
    },
    {id:1,
      text: 'zrobic dobry uczynek',
      date: '2018-02-11',
      important:true,
      active:true,
      finishDate:null
  },
  {id:2,
    text: 'pouczyc sie',
    date: '2020-02-15',
    important:false,
    active:true,
    finishDate:null
},
    ]
}
deleteTask= (id)=>{
  // console.log("delete elementu o id" + id);
  // const tasks = [...this.state.tasks];
  // const index = tasks.findIndex(task => task.id === id);
  // tasks.splice(index, 1);
  // this.setState({
  //   tasks
  // })
  let tasks= [...this.state.tasks];
  tasks = tasks.filter(task => task.id !== id)
  this.setState({
    tasks
  })
}
changeTaskStatus = (id)=>{
let tasks  = Array.from(this.state.tasks)
tasks.forEach(task=>{
  if(task.id === id){
    task.active = false;
    task.finishDate= new Date().getTime()
  }
})
this.setState({

tasks
})
}
addTask = (text, date, important) =>{
  const task = {
    id:this.counter,
      text, //tekst z inputa
      date,
      important,
      active:true,
      finishDate:null
  }
  this.counter++
  this.setState(prevState =>({
    tasks:[...prevState.tasks, task]
  }))
  return true;
}
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
       <AddTask add={this.addTask}/>
       <TaskList tasks={this.state.tasks} delete={this.deleteTask} change = {this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
