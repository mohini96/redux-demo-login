import axios from 'axios';
export const fetchUser=()=> {
    return (dispatch => {
        debugger;
        return axios.get('http://localhost:8000/admin/getuserlist').then(({data}) => {
            console.log(data)
            localStorage.setItem('user', data.name);
            dispatch({
                type: 'FETCH_USER',
                payload: data
            });
        }).catch((err)=>{
            debugger
            console.log("login err====>",err);
        })
    });
}
