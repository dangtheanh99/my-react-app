import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleOnChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.salary) {
      alert("Missing parameters");
      return;
    } else {
      this.props.addNewJob({
        id: Math.floor(Math.random() * 100 + 1),
        title: this.state.title,
        salary: this.state.salary,
      });

      this.setState({
        title: "",
        salary: "",
      });
    }
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleOnChangeTitle}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={this.handleOnChangeSalary}
        />
        <br />
        <br />

        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AddComponent;
