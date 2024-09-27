import axios from 'axios';

export const getMeme = () => {
    return(dispatch) => {
        dispatch(fetchStart());

        axios.get('https://api.imgflip.com/get_memes')
        .then( resp => {
            dispatch(fetchSuccess(resp.data.data));
        })
        .catch( err => {
            dispatch(fetchError(err));
        });
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

