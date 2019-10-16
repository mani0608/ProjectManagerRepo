import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...args }) => (
    <Route {...args} render={props => {
        if (auth.isLoading) {
            return <h2>Loading...</h2>
        } else if (!auth.isAuthenticated) {
            return <Redirect to="/login" />
        } else {
            return <Component {...props} />
        }
    }}
    />
);

const mapStateToProps = state => {
    auth: state.auth
}

export default connect(mapStateToProps)(PrivateRoute)
