import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <span onClick={this.props.completeTodo}>{this.props.text}</span>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired 
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.todos.map((todo, key) =>
            <li key={key}>
              <Todo text={todo} completeTodo={() => this.props.completeTodo({type: 'COMPLETE', key: key})} />
            </li>
            )
          }
        </ol>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TodoList
