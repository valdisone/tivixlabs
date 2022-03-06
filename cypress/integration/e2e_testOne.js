describe("E2E test One", () => {

    before(() => {
        cy.visit('http://qalab.pl.tivixlabs.com/');
    });

    it('A user should be able to search for a car in specific country/city', () => {

        cy.get('#country').select('Poland');
        cy.get('#city').select('Cracow');
        cy.get('#model').type('Toyota');

        cy.get('#pickup').type('2022-03-09').should('have.value', '2022-03-09');
        cy.get('#dropoff').type('2022-03-15').should('have.value', '2022-03-15');

        cy.get('button[type="submit"]').click();

        cy.get('tbody')
            .find('tr')
            .contains('Toyota')
            .parents('tr')
            .find('a:contains("Rent")')
            .click()

        cy.get('.card-header').contains('Toyota')
        cy.get('.card-body > :nth-child(3)').contains('Location: Poland, Cracow')
        cy.get('a:contains("Rent!")').click()

        cy.contains('.card-text', 'Location').should('contain', 'Poland, Cracow')
        cy.get('.col-md-4 > :nth-child(6)').should('have.text', ' Pickup date: 2022-03-09')
        cy.get('.col-md-4 > :nth-child(7)').should('have.text', ' Dropoff date: 2022-03-15')

        cy.get('#name').type('Michael')
        cy.get('#last_name').type('Jackson')
        cy.get('#card_number').type('4988438843884305')
        cy.get('#email').type('test@test.com')
        cy.get('button:contains("Rent")').click()
    });
});
