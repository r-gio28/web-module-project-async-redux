import axios from 'axios';

export const getMeme = () => {
    return(dispatch) => {
        dispatch({
            type: FETCH_START
        });

        axios.get('https://api.imgflip.com/get_memes')
        .then( resp => {
            dispatch({type: FETCH_SUCCESS, payload: resp.data.data.memes});
        })
        .catch( err => {
            dispatch({type: FETCH_ERROR, payload: err});
        })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (meme)=> {
    return({type: FETCH_SUCCESS, payload:meme});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}

