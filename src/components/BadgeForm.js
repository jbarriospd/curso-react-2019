import React from "react";

class BadgeForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>New attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>socialMedia</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="socialMedia"
              value={this.props.formValues.socialMedia}
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
