import React from "react";
import "./ListUser.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleClickUser = (item) => {
    this.props.history.push(`/user/${item.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-container">
        <h3 className="list-title">List User from Reqres</h3>
        <div className="list-block">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  className="list-item"
                  key={item.id}
                  onClick={() => this.handleClickUser(item)}
                >
                  {index + 1}. {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
