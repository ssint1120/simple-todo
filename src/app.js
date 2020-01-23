import React from 'react'
import ReactDom from 'react-dom'
import TodoList from './todolist'
import TodoAdd from './todoadd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.dispatch = this.dispatch.bind(this)
  }

  render() {
    return (
      <div>
        <TodoList {...this.state} completeTodo={this.dispatch} />
        <TodoAdd addTodo={this.dispatch}/>
      </div>
    )
  }

  dispatch(action) {
    switch(action.type) {
      case 'ADD':
        this.setState((state) => {return {todos: this._addTodo(state.todos, action.text)}})
        break
      case 'COMPLETE':
        this.setState((state) => {return {todos: this._completeTodo(state.todos, action.key)}})
        break
      default:
        break
    }
  }

  _addTodo(todos, text) {
    if(text.length < 1) return todos // 長さ0の文字列はクリックできないので追加しない
    return todos.concat(text)
  }

  _completeTodo(todos, key) {
    return todos.filter((_, idx) => idx != key)
  }
}

const app = document.getElementById('app')
ReactDom.render(<App />, app)
