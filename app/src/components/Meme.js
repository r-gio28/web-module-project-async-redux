import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchError, getMeme} from '../actions';


const Meme = ({meme, isFetching, error, dispatch}) => {

useEffect((resp) => {
    dispatch(getMeme(resp));
}, []);

if(error) {
    return <h2>We got and error: {error}</h2>
}

if(isFetching) {
    return <h2>MEMES INBOUND</h2>
}

const handleClick = () => {
    dispatch(getMeme());
}    

    return(
        <div>
            <h2>I am the meme component</h2>
            <button onClick={handleClick}>NEED A MEME?!?!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Meme);