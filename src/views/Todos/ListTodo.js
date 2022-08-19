import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      {
        id: 1,
        title: "Doing homework",
      },
      {
        id: 2,
        title: "Playing football",
      },
      {
        id: 3,
        title: "Listening to music",
      },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
  };

  handleDeleteTodo = (todo) => {
    let currentListTodo = this.state.listTodo;

    currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentListTodo,
    });

    toast.error("Delete succeed");
  };

  handleChangeEdit = (e) => {
    let editTodoCopy = this.state.editTodo;
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    // Lưu item sau khi sửa
    if (!isEmptyObj && editTodo.id === todo.id) {
      let listEditCopy = [...listTodo];
      let objIndex = listEditCopy.findIndex((item) => item.id === todo.id);
      listEditCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodo: listEditCopy,
        editTodo: {},
      });
      toast.info("Update Todo successfully!");
      return;
    }

    // Edit
    this.setState({
      editTodo: todo,
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div>
        <h2>Todo App</h2>
        <div className="list-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="item-todo" key={item.id}>
                    {isEmptyObj ? (
                      <span>
                        {index + 1}. {item.title}
                      </span>
                    ) : (
                      <>
                        {item.id === editTodo.id ? (
                          <span>
                            {index + 1}.{" "}
                            <input
                              type="text"
                              value={editTodo.title}
                              onChange={this.handleChangeEdit}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1}. {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button onClick={() => this.handleEditTodo(item)}>
                      {!isEmptyObj && editTodo.id === item.id ? "Save" : "Edit"}
                    </button>
                    <button onClick={() => this.handleDeleteTodo(item)}>
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Color(ListTodo);
