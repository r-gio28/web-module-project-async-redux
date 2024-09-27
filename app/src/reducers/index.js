import {FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from '../actions';

const initialState = {
  data: {
    memes: [{
      "id": "181913649",
      "name": "Drake Hotline Bling",
      "url": "https://i.imgflip.com/30b1gx.jpg",
      "width": 1200,
      "height": 1200
    }]
  },
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        data: {},
        isFetching:true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        data: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        data:{},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  } 
};

