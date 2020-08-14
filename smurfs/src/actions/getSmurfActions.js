import axios from 'axios'
export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR"

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_SMURF_START })
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
       return dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data })})
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_SMURF_ERROR, payload: err.message})
    })
}