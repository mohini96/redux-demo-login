
const initialState={
    user:[]
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'FETCH_USER':
            return{...state,
                user:action.payload};
        default:
            return {...state}
    }
}

// switch (action.type){
//     case 'FETCH_USER':
//         return action.payload;
//     case 'SAVE_USER':
//         return action.payload
//     default:
//         return state;
// }