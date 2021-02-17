import React, { Component } from 'react'

class Output extends Component {
  render() {
    const detailList=this.props;
    const list = Object.entries(detailList).map(([key, value]) => {
      return (
        <div key={key}>
          {key} - {value}
        </div>
      )
    });
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default Output
