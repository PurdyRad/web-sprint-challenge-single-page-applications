describe ('Pizza app', () => {

    beforeEach(() =>{
        cy.visit('http://localhost:3000/PizzaBuilder')
    })

    const nameText = () => cy.get('input[name=name]') 

    const sizeOpt = () => cy.get('select[name=size]') 

    const radioBtns = () => cy.get('[type=radio]')

    const quantityOpt = () => cy.get('select[name=quantity]') 

    const baconBtn =() => cy.get('input[name=bacon]')
    
    const pineapplesBtn =() => cy.get('input[name=pineapples]')

    const pizzaBtn = () => cy.get('button[id=ID]')


    it('sanity check', () => {
        expect(1 + 1).to.equal(2)
    })


    it('proper elements displaying', () => {
        nameText().should('exist')

        sizeOpt().should('exist')

        radioBtns().should('exist')

        quantityOpt().should('exist')

        pizzaBtn().should('exist')
    })

    it('typing in inputs', () => {
        nameText().type('Johnny Cash').should('have.value', 'Johnny Cash')
    })

    it('checking multiple ingredients', () => {
        baconBtn().click()
        pineapplesBtn().click()
    })

    it('requesting a pie', () => {
        nameText().type('Papa Johns')
        sizeOpt().select(['10"']) 
        radioBtns().check('redSauce')
        baconBtn().click()
        pineapplesBtn().click()
        quantityOpt().select(['1']) 
        pizzaBtn().click()
    })
})