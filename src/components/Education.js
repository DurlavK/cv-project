import React, { Component } from 'react'

class Education extends Component {
  render() {
    const {handleSchoolName, handleCollegeName, handleDegree, handleGradYear } = this.props;
    return (
      <div className='flex flex-col items-center'>
      <h1 className=''>Educational Information</h1>
      <div className='flex flex-col'>
        <label htmlFor="schoolName">School Name-</label>
        <input type="text" id='schoolName' name='schoolName' placeholder='School Name' className='border rounded-lg' onChange={handleSchoolName}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="collegeName">College Name-</label>
        <input type="text" id='collegeName' name='collegeName' placeholder='College Name' className='border rounded-lg' onChange={handleCollegeName}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="degree">Title/Degree -</label>
        <input type="text" id='degree' name='degree' placeholder='B.Tech / B.E ..' className='border rounded-lg' onChange={handleDegree}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="gradYear">Graduation Year-</label>
        <input type="number" id='gradYear' name='gradYear' placeholder='Graduation year' className='border rounded-lg' onChange={handleGradYear}/>
      </div>
    </div>
    )
  }
}

export default Education
