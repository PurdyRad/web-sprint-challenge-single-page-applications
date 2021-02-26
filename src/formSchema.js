import * as yup from 'yup'

const formSchema = yup.object().shape({
    specialInstruction: yup.string()
        .trim(),
    name: yup.string()
        .trim()
        .required('Please provide a name')
        .min(2, 'Name must be at least 2 characters long'),
    size: yup.string()
        .oneOf(['10"', '12"', '16"'], 'Size is required'),
    quantity: yup.string()
    .oneOf(['1', '2', '3'], 'How many pies would you like'),
    sauce: yup.string()
        .oneOf(['noSauce', 'redSauce', 'whiteSauce'], 'Sauce is required'),
   // Checkboxes are not required
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapples: yup.boolean(),
    jalapenos: yup.boolean()
})

export default formSchema