import Trip from './Trip'

const Trips = ({ trips, onDelete, onToggle}) => {
    
    return (

        <>
            {trips.map((trip) => (
                <Trip key={trip.id} trip={trip}
                 onDelete ={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Trips
