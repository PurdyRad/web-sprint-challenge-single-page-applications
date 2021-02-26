import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory ()
    const routeToPizzaBuilder = () => {
        history.push('/PizzaBuilder')
    }

    return (
        <div className='homeWrapper'>
            <img className='homeImg'
            src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg' alt='pizza pie' />
            <button 
            onClick={routeToPizzaBuilder} 
            className='pizzaBtn'
            >
                Pizza!
            </button>
        </div>
    )
}

export default Home
