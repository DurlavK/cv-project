import React, { Component } from 'react'
import './App.css';

import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Output from './components/Output';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      schoolName: '',
      collegeName: '',
      degree: '',
      gradYear: '',
      companyName: '',
      poition: '',
      mainTask: '',
      startDate: '',
      endDate: '',
      showOutput: false
    };
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  handlePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  handleSchoolName = (e) => {
    this.setState({
      schoolName: e.target.value
    });
  };
  handleCollegeName = (e) => {
    this.setState({
      collegeName: e.target.value
    });
  };
  handleDegree = (e) => {
    this.setState({
      degree: e.target.value
    });
  };
  handleGradYear = (e) => {
    this.setState({
      gradYear: e.target.value
    });
  };

  handleCompanyName = (e) => {
    this.setState({
      companyName: e.target.value
    });
  };
  handlePosition = (e) => {
    this.setState({
      position: e.target.value
    });
  };
  handleMainTask = (e) => {
    this.setState({
      mainTask: e.target.value
    });
  };
  handleStartDate = (e) => {
    this.setState({
      startDate: e.target.value
    });
  };
  handleEndDate = (e) => {
    this.setState({
      endDate: e.target.value
    });
  };

  createCV = (e) => {
    this.setState({
      showOutput: true
    });
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phoneNumber);
    console.log(this.state.schoolName);
    console.log(this.state.collegeName);
    console.log(this.state.degree);
    console.log(this.state.gradYear);
    console.log(this.state.companyName);
    console.log(this.state.position);
    console.log(this.state.mainTask);
    console.log(this.state.startDate);
    console.log(this.state.endDate);
  }
  
  
  render() {
    return (
      <div>
        <General 
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        handleEmail={this.handleEmail}
        handlePhoneNumber={this.handlePhoneNumber}
        />
        <Education
        handleSchoolName={this.handleSchoolName}
        handleCollegeName={this.handleCollegeName}
        handleDegree={this.handleDegree} 
        handleGradYear={this.handleGradYear}
        />
        <Experience 
        handleCompanyName={this.handleCompanyName}
        handlePosition={this.handlePosition}
        handleMainTask={this.handleMainTask}
        handleStartDate={this.handleStartDate}
        handleEndDate={this.handleEndDate}
        />
        <button onClick={this.createCV}>Create CV</button>
        {this.state.showOutput && 
        <Output
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        phoneNumber={this.state.phoneNumber}
        schoolName={this.state.schoolName}
        collegeName={this.state.collegeName}
        degree={this.state.degree}
        gradYear={this.state.gradYear}
        companyName={this.state.companyName}
        poition={this.state.position}
        mainTask={this.state.mainTask}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        />} 
      </div>
    );
  }
}

export default App;
