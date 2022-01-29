/// <reference types="cypress" />

context('Search for Books', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Search', () => {
       cy.get('#searchInput').type('Harry Potter');
       cy.get('.btn-search').click();
    })
  })