import React from 'react'

const PizzaBuilder = (props) => {
    const { values, change, submit, disabled, errors } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }


    return (
        <form className='formCont' onSubmit={onSubmit}> 
            <div className='PizzaBuilder'>
                 <h2>Lets Make A Pie</h2>
                <div className='errors'>
                  <div>{errors.size}</div>
                  <div>{errors.sauce}</div>
                  <div>{errors.quantity}</div>
                  <div>{errors.name}</div>
                </div>
                <div className='inputs'>
                    <div className='sizes'>
                    <label>Name
                        <input 
                        value={values.name} 
                        onChange={onChange} 
                        name='name' 
                        type='text'
                        />
                    </label>
                    <h3>Make yo Pie SPECIAL</h3>
                    {/* Size */}
                    <label>Size
                        <select
                        onChange={onChange} 
                        value={values.size}
                        name='size'
                        >
                            <option value=''>- Select a size -</option>
                            <option value='10"'>10"</option>
                            <option value='12"'>12"</option>
                            <option value='16"'>16"</option>
                        </select>
                    </label>
                    </div>
                    {/* Sauce */}
                    <div className='suaces'>
                    <h3>Sauce it up</h3>
                    <label>No Sauce
                        <input 
                        type='radio' 
                        name='sauce'
                        onChange={onChange}
                        value='noSauce'
                        checked={values.sauce === 'noSauce'}
                        />
                    </label>

                    <label>Red Sauce
                        <input 
                        type='radio' 
                        name='sauce'
                        onChange={onChange}
                        value='redSauce'
                        checked={values.sauce === 'redSauce'}
                        />
                    </label>

                    <label>White Sauce
                        <input 
                        type='radio' 
                        name='sauce'
                        onChange={onChange}
                        value='whiteSauce'
                        checked={values.sauce === 'whiteSauce'}
                        />
                    </label>
                    </div>

                    {/* Toppings */}
                    <div className='toppings'>
                        <h3>Whatcha want on it?</h3>
                        <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                        </label>

                        <label>Bacon
                        <input 
                            type='checkbox'
                            name='bacon'
                            onChange={onChange}
                            checked={values.bacon}
                        />
                        </label>

                        <label>Chicken
                        <input 
                            type='checkbox'
                            name='chicken'
                            onChange={onChange}
                            checked={values.chicken}
                        />
                        </label>

                        <label>Mushrooms
                        <input 
                            type='checkbox'
                            name='mushrooms'
                            onChange={onChange}
                            checked={values.mushrooms}
                        />
                        </label>

                        <label>Pineapple
                        <input 
                            type='checkbox'
                            name='pineapples'
                            onChange={onChange}
                            checked={values.pineapples}
                        />
                        </label>

                        <label>Jalapenos
                        <input 
                            type='checkbox'
                            name='jalapenos'
                            onChange={onChange}
                            checked={values.jalapenos}
                        />
                        </label>
                    </div>

                    {/* Special Instructions */}
                    <div className='instructions'>
                    <label>Special Instructions
                        <input 
                        value={values.specialInstruction} 
                        onChange={onChange} 
                        name='specialInstruction' 
                        type='text'
                        />
                    </label>
                    </div>

                </div>
                <div className='submission'>
                    <label>Quantity
                        <select
                        onChange={onChange} 
                        value={values.quantity} 
                         name='quantity'
                        >
                            <option value=''>- How many ya need -</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </label>
                    <button disabled={disabled}>Gimmie Some Pizza</button>
                </div>
            </div>
        </form> 

    )
}

export default PizzaBuilder
