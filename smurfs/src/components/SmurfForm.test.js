import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import SmurfForm from './SmurfForm'

test('making sure Smurf form renders without error', () => {
    render(<SmurfForm />)
})

test('add a name, age, height to the form and try submitting it', async () => {
    render(<SmurfForm />)

    const nameInput = screen.getByLabelText(/name/i)
    const ageInput = screen.getByLabelText(/age/i)
    const heightInput = screen.getByLabelText(/height/i)

    fireEvent.change(nameInput, {target: {value: 'Jim'}})
    expect(nameInput).toHaveValue("Jim")
    fireEvent.change(ageInput, {target: {value: '15'}})
    expect(ageInput).toHaveValue('15')
    fireEvent.change(heightInput, {target: {value: '5.5ft'}})
    expect(heightInput).toHaveValue('5.5ft')

    const submitBtn = screen.getByRole('button', {type: /submit/i})

    fireEvent.click(submitBtn)


})