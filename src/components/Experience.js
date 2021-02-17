import React, { Component } from 'react'

class Experience extends Component {
  render() {
    const {handleCompanyName, handlePosition, handleMainTask, handleStartDate, handleEndDate } = this.props;
    return (
      <div className='flex flex-col items-center'>
      <h1 className=''>Experience</h1>
      <div className='flex flex-col'>
        <label htmlFor="companyName">Company Name-</label>
        <input type="text" id='companyName' name='companyName' placeholder='Company Name' className='border rounded-lg' onChange={handleCompanyName}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="position">Company Position-</label>
        <input type="text" id='position' name='position' placeholder='Position in company' className='border rounded-lg' onChange={handlePosition}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="mainTask">Main Task-</label>
        <input type="text" id='mainTask' name='mainTask' placeholder='Main Task at company' className='border rounded-lg' onChange={handleMainTask}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="startDate">Starting Date-</label>
        <input type="date" id='startDate' name='startDate' placeholder='Starting Date at company' className='border rounded-lg' onChange={handleStartDate}/>
        <label htmlFor="endDate">Ending Date-</label>
        <input type="date" id='endDate' name='endDate' placeholder='Ending Date at company' className='border rounded-lg' onChange={handleEndDate}/>
      </div>
    </div>
    )
  }
}

export default Experience
