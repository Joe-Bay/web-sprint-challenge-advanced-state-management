import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR} from '../actions/getSmurfActions'

const initialState = {
    smurfs: [],
    loading: false,
    error: ''
}

const smurfReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
            case FETCH_SMURF_SUCCESS:
            return {
                ...state, 
                smurfs: action.payload,
                loading: false,
                error: ''
            }
            case FETCH_SMURF_ERROR:
                return {
                    ...state, 
                    smurfs: [],
                    loading: false, 
                    error: action.payload
                }
        default: 
        return state
    }
}
export default smurfReducer