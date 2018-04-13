import React from 'react';
import {logoutMethod} from '../actionMethods/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Register extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>
                <h1>Register</h1>
                <button onClick={this.props.logoutMethod}>logout</button>
            </div>
        )
    }
}

const mapStateToProps=state=>state;
const mapDispatchToProps=(dispatch)=>bindActionCreators({logoutMethod},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Register);