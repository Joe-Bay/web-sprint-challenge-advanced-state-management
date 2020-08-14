import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs} from '../actions/getSmurfActions'


const Smurfs = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    return (
        <section>
            {props.loading ? <h4>Loading the smurfs.. Please wait a moment</h4> : null}
            {props.error ? <h4>There was an error: {props.error}</h4> : null}
            {props.smurfs.length > 0 ? (
                <div>
                    <h1>Smurf Village Members</h1>
                    {props.smurfs.map(smurf => (
                        <div key={smurf.id}>
                        <h2>Name:{smurf.name}</h2>
                        <p>Age:{smurf.age}</p>
                        <p>Height:{smurf.height}</p>
                        </div>
                    ))}
                </div>
            ): null}
        </section>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(Smurfs)