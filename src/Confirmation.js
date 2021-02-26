import React from 'react'

const Confirmation = ({details}) => {
    if (!details) {
        return <h3>Working on fetching da pizza...</h3>
    }

    return (
        <div className='pizzaContainer'>
            <p>{details.name}'s {details.size} Pie</p>
            <br></br> With a beautiful {details.sauce} base
            <br></br> Piled high with {details.toppings}
        </div>
    )
}

export default Confirmation
