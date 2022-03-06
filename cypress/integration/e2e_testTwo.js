describe("E2E test Two", () => {

    beforeEach(() => {
        cy.visit("http://qalab.pl.tivixlabs.com/");
    });

    it('My first testCase', () => {

        cy.get('#country').select('Poland');
        cy.get('#city').select('Cracow');
        cy.get('#model').type('Toyota');

        cy.get('#pickup').type('2022-03-03').should('have.value', '2022-03-03');
        cy.get('#dropoff').type('2022-02-28').should('have.value', '2022-02-28');

        cy.get('button[type="submit"]').click();
        cy.get('h3').should('have.text', 'Please enter a valid date!');
    });
});
