import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleDeleteJob = (job) => {
    // console.log("Delete: ", job);
    // alert("Click me");
    this.props.deleteJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;

    return (
      <>
        {showJob ? (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}${" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => this.handleDeleteJob(item)}
                    >
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <button onClick={this.handleShowHide}>Hide</button>
          </>
        ) : (
          <button onClick={this.handleShowHide}>Show</button>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
// let { arrJobs } = props;
// return (
//   <div className="job-list">
//     {arrJobs.map((item, index) => {
//       return (
//         <div key={item.id}>
//           {item.title} - {item.salary} $
//         </div>
//       );
//     })}
//   </div>
// );
// };

export default ChildComponent;
