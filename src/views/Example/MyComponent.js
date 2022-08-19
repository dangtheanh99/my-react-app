import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "job1",
        title: "Developer",
        salary: 1000,
      },
      {
        id: "job2",
        title: "Tester",
        salary: 800,
      },
      {
        id: "job3",
        title: "Shipper",
        salary: 500,
      },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("prevState", prevState, "currentState", this.state);
  };

  render() {
    console.log("Hello from render");
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default Color(MyComponent);
