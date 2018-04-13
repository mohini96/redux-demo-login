import React from 'react';
import {logoutMethod} from '../actionMethods/auth';
import {fetchUser} from "../actionMethods/user";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        console.log(this.props.users);
        const {users}=this.props;
        return(
            <div>
                <table className='table table-responsive '>
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user)=>{
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button onClick={this.props.logoutMethod}>logout</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    debugger;
    return({
        users:state.user.user||[]
    })
};
const mapDispatchToProps=(dispatch)=>bindActionCreators({logoutMethod,fetchUser},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Home);