import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
    position: relative;
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const StyledButton = styled.button`
    position: absolute;
`;


const Home = () => {

    const history = useHistory ()
    const routeToPizzaBuilder = () => {
        history.push('/PizzaBuilder')
    }

    return (
        <StyledDiv className='homeWrapper'>
            <StyledButton
            onClick={routeToPizzaBuilder} 
            className='pizzaBtn'
            >
                Pizza!
            </StyledButton>
            <StyledImg className='homeImg'
            src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg' alt='pizza pie' />
        </StyledDiv>
    )
}

export default Home
