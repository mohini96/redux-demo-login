import axios from 'axios';
export const loginmethod=(payload)=> {
    return (dispatch => {
        return axios.post('http://localhost:8000/admin/login', payload).then(({data}) => {
            console.log(data.name);
            debugger
            localStorage.setItem('user', data.name);
            dispatch({
                type: 'LOGIN',
                payload: data
            });
        }).catch((err)=>{
            debugger
            console.log("login err====>",err);
        })
    });
}

export const logoutMethod=()=>{
    return dispatch => {
        localStorage.clear();
        localStorage.removeItem("user");
        dispatch({type:'logout'});
    }
};
