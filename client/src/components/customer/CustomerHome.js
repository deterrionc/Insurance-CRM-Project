import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import CustomerSidbar from './CustomerSidebar'
import CustomerDashboard from './CustomerDashboard'
import CustomerEdit from './CustomerEdit'
import CustomerPayment from './CustomerPayment'

const CustomerHome = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <CustomerSidbar />
        <div className='col-md-10'>
          <Router basename="/home">
            <PrivateRoute exact path="/" component={CustomerDashboard} />
            <PrivateRoute exact path="/edit" component={CustomerEdit} />
            <PrivateRoute exact path="/payment" component={CustomerPayment} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default CustomerHome