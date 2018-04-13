import React from 'react';
import {loginmethod} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

 class Login extends React.Component{
     constructor() {
         super();
         this.state = {
             credentials:{}
         }
     }
     handleChange=(e)=>{
       const {credentials} =this.state;
       credentials[e.target.id]=e.target.value;
       this.setState({credentials});
     };
     loginHandler=()=>{
         debugger;
         console.log(this.state.credentials);
       this.props.loginmethod(this.state.credentials);
     };
     render(){

         return(
             <div>
                 <input type={'text'} id={'username'} onChange={this.handleChange}/>
                 <input type={'password'} id={'password'} onChange={this.handleChange} />
                 <button onClick={this.loginHandler}>login</button>
             </div>
         )
     }
 }

 const mapStateToProps=state=>state;
 const mapDispatchToProps=(dispatch)=>bindActionCreators({loginmethod},dispatch);
 export default connect(mapStateToProps,mapDispatchToProps)(Login)