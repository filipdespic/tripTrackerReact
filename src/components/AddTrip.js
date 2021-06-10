import { useState } from 'react'

const AddTrip = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault();

        if(!text){
            alert('Please add a trip instance!');
            return;
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-conrol'>
                <label>Trip</label>
                <input type='text'
                    placeholder='Add Trip' value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-conrol'>
                <label>Day and Time</label>
                <input type='text'
                    placeholder='Add Day and Time' value={day}
                    onChange={(e) => setDay(e.target.value)} />

            </div>
            <div className='form-conrol from-control-check'>
                <label>Set reminder</label>
                <input type='checkbox'
                checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Trip' className='btn btn-block' />
        </form>
    )
}

export default AddTrip
