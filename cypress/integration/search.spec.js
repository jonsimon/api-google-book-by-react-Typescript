/// <reference types="cypress" />
import { bookItem } from '../fixtures/bookItem.js';

context('Search for Books', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('and get one book returned', () => {
      const response = {
        items: [bookItem],
        kind: "books#volumes",
        totalItems: 1
      };

       cy.intercept('GET','https://www.googleapis.com/books/v1/volumes?q=HarryPotte',response).as('Get Single Book');

       cy.get('#searchInput').type('Harry Potter');
       cy.get('.btn-search').click();
    })
  })