import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class About extends React.Component {
  handleDelete = (item) => {
    console.log(">>> check delete user: ", item);
    this.props.deleteUser(item);
  };

  handleAdd = () => {
    let id = Math.floor(Math.random() * 100);
    let addUser = {
      id: id,
      fname: `Random name ${id}`,
    };

    this.props.addUser(addUser);
  };

  render() {
    console.log(">>> check props from redux : ", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <div>
        <h1>Hello from About</h1>
        <p>Nothing is impossible</p>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div key={item.id}>
                {index + 1} - {item.fname}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleDelete(item)}
                >
                  X
                </span>
              </div>
            );
          })}
        <button onClick={this.handleAdd} style={{ marginTop: "12px" }}>
          Thêm mới
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => dispatch({ type: "DELETE_USER", payload: user }),
    addUser: (user) => dispatch({ type: "ADD_USER", payload: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(About));
