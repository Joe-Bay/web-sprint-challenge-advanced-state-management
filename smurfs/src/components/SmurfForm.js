import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}



const SmurfForm = () => {

    const [formValues, setFormValues] = useState()


    const postSmurf = (newSmurf) => {
        Axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('this is the post',res)
        })
        .catch(err => console.log(err))
    }


    const handleChanges = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onSubmit = () => {
        const newSmurf = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            height: formValues.height.trim(),
        }
        postSmurf(newSmurf)
        setFormValues(initialFormValues)
    }

    return (
        <div className="form-container" onSubmit={onSubmit}>
            <label>Name:
                <input 
                type='text'
                placeholder='text'
                name='name'
                onChange={handleChanges}
                
                />
            </label>
            <label>Age:
                <input 
                type='text'
                placeholder='age'
                name='age'
                onChange={handleChanges}
                />
            </label>
            <label>Height:
                <input 
                type='text'
                placeholder='Height'
                name='height'
                onChange={handleChanges}
                />
            </label>
            <div>
                <button>Submit Smurf</button>
            </div>
        </div>
    )
}
export default SmurfForm