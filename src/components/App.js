import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import Nav from './Nav'
import ElCapitan from './ElCapitan'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true 
              ? null 
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/polls/:id' exact component={Poll} />
                  <Route path='/add' exact component={AddPoll} />
                  <Route path='/ElCapitan' exact component={ElCapitan} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)