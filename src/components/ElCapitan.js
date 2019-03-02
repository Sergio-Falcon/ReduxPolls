import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ElCapitan extends Component {

  render() {
    return (
    <div>
      <div className="header">
        <img src="/static/logo.svg" alt="logo"/>
        <h1 className="climbHeader">CLIMBALYTICS</h1>
        <h2 className="challenge">El Capitan Challenge | March 2019</h2>
      </div>

      <div>
        <table>
        <colgroup>
          <col class="a" />
          <col class="b" />
          <col class="c" />
          <col class="d" />
        </colgroup>
          <tr>
            <th className="buttress">S.E. BUTTRESS+</th>
            <th className="dolt">DOLT TOWER+</th>
            <th className="greatRoof">GREAT ROOF+</th>
            <th className="nose">THE NOSE</th>
          </tr>
          <tr>
            <td>Sergio</td>
            <td>Nestor</td>
            <td>Chris Sharma</td>
            <td>Jill Smith</td>
          </tr>
        </table>
      </div>
    </div>
      
    
    )
  }
}


export default connect()(ElCapitan)