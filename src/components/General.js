import React, { Component } from 'react'

class General extends Component {
  render() {
    const {handleFirstName, handleLastName, handleEmail, handlePhoneNumber } = this.props;
    return (
      <div className='flex flex-col items-center'>
        <h1 className=''>General Information</h1>
        <div className='flex flex-col'>
          <label htmlFor="firstName">First Name-</label>
          <input type="text" id='firstName' name='firstName' placeholder='First Name' className='border rounded-lg' onChange={handleFirstName}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="lastName">Last Name-</label>
          <input type="text" id='lastName' name='lastName' placeholder='Last Name' className='border rounded-lg' onChange={handleLastName}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Email ID-</label>
          <input type="email" id='email' name='email' placeholder='Email ID' className='border rounded-lg' onChange={handleEmail}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="phoneNumber">Phone Number-</label>
          <input type="number" id='phoneNumber' name='phoneNumber' placeholder='xx.....xxx' className='border rounded-lg' onChange={handlePhoneNumber}/>
        </div>
      </div>
    )
  }
}

export default General
