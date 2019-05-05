
import axios from 'axios';

const initialState = {
    user : {
        name : 'new name',
        age : 0,
        address : 'new address'
    },
    isLoding : false,
}

// const SAVE_USER = "SAVE_USER"

// function saveUser(user) {
//     return {
//         type:SAVE_USER,
//         user:user
//     }
// }

const GET_USER_REQUEST = 'GET_USER_REQUEST'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_FAILED = 'GET_USER_FAILED'

function getUserRequest() {
    return {
        type: GET_USER_REQUEST,
        isLoding : true
    }
}

function getUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        isLoading : false,
        user: user
    }
}

function getUserFailed () {
    return {
        type: GET_USER_FAILED,
        isLoading : false
    }
}

function getUser() {
    return (dispatch) => {
        dispatch(getUserRequest());

        axios.get("http://localhost:4000")
            .then((response) => {
                dispatch(getUserSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUserFailed());
      })
    }
}

function userReducer (state = initialState, action) {
    switch(action.type) {
        case GET_USER_REQUEST:
            return Object.assign({}, state, {
                isLoading : action.isLoading 
            })
        case GET_USER_SUCCESS:
        return Object.assign({}, state, {
            user: Object.assign({}, state.user, action.user),       //넘겨주는 객체세 기존의 객체와 같다면 이렇게 해야함
            isLoading : action.isLoading    
        })
        case GET_USER_FAILED:
        return Object.assign({}, state, {
            isLoading : action.isLoading   
        })
        default:
            return state;
    }
}

export default userReducer;

export {
    getUser
}