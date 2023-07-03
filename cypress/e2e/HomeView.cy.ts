describe('HomeView', () => {
  it('visits the app root url', () => {
    cy.visit('http://127.0.0.1:5174/');
    cy.get('#full-name').click();
    cy.get('#full-name').type('spider');
    cy.get('.bg-amber-900').click();
    cy.get('#favButton').click();
    cy.get('#favLink').click();
    cy.get('.movie-title').contains('Waterworld');
    cy.get('#favButton').click();
  })
})
