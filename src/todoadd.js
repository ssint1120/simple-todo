import React from 'react'
import PropTypes from 'prop-types'

class TodoAdd extends React.Component {
  constructor(props) {
    super(props)
    this.todoText = React.createRef()
  }

  render() {
    return (
      <div>
        <input ref={this.todoText} />
        <button onClick={() => this.props.addTodo({type: 'ADD', text: this.todoText.current.value})}>追加</button>
      </div>
    )
  }
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoAdd