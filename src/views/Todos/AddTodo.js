import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Missing info");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    toast.success("Add a new Todo");
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="list-add">
        <input type="text" value={title} onChange={this.handleChangeTitle} />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
