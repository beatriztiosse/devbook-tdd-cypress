describe('Devbook application', () => {
  it('Visits the Devbook application', () => {
    cy.visit('http://localhost:3000')
    cy.get('h2[data-test="heading"]').contains('DevBook')
  });
})
