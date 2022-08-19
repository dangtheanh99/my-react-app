import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleBackBtn = () => {
    this.props.history.push("/user");
  };

  render() {
    let { user } = this.state;
    let emptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div className="user-title">
          User's Information {this.props.match.params.id}
        </div>
        <div className="user-info">
          {emptyObj === false && (
            <>
              <div>
                User's name: {user.first_name} {user.last_name}
              </div>
              <div>User's email: {user.email}</div>
              <div>
                <img src={user.avatar} />
              </div>
              <button onClick={this.handleBackBtn}>Back</button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(DetailUser);
