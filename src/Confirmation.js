import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    border: 10px solid darkseagreen;
`;

const Confirmation = ({details}) => {
    if (!details) {
        return <h3>Working on fetching da pizza...</h3>
    }

    return (
        <StyledDiv className='pizzaContainer'>
            <p>{details.name}'s {details.size} Pie</p>
            <br></br> With a beautiful {details.sauce} base
            <br></br> Piled high with {details.toppings} 
        </StyledDiv>
    )
}

export default Confirmation
