import React, { useState, useEffect } from "react";
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import PizzaBuilder from './PizzaBuilder'
import Confirmation from './Confirmation'
import Home from './Home'
import formSchema from './formSchema'
import * as yup from 'yup'

const initialFormValues = {
  //Drop down
  size: '',
  quantity: '',
  //Radio buttons
  sauce: '',
  //Checkboxes
  pepperoni: false,
  bacon: false,
  chicken: false,
  pineapples: false,
  mushrooms: false,
  jalapenos: false,
  //Text box
  specialInstruction: '',
  name: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  quantity: '',
  sauce: '',
}

const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  
  

  const inputChange = (name, value) => {

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }


  const formSubmit = () => {
    const newPizza = {
      //Dropdowns
      size: formValues.size.trim(),
      quantity: formValues.quantity.trim(),
      //Radio buttons
      sauce: formValues.sauce.trim(),
      //Checkboxes
      toppings: ['pepperoni', 'bacon', 'chicken', 'pineapples', 'mushrooms', 'jalapenos'].filter(topping => formValues[topping]),
      //Text box
      name: formValues.name.trim(),
      specialInstruction: formValues.specialInstruction.trim()

    }
    setPizza(pizza.concat(newPizza))
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(valid))
  }, [formValues])

  return (
    <>
      <nav>
        <div className='homeCont'>
          <h1 className='pizzaHeader'>Lambda Eats</h1>
          <Link to='/'>Home</Link>
          <Link to='/Confirmation'>Pizzas in the Works</Link>
        </div>
      </nav>
      <Switch>
        <Route path={`/PizzaBuilder/Confirmation`}>
          {
            pizza.map(piz => {
              return(
            
          <Confirmation key={piz.id} details={piz}/>
              )
            })
          }
        </Route>
        <Route path={`/PizzaBuilder`}>
          <PizzaBuilder 
          values={formValues} 
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route path={`/`}>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
