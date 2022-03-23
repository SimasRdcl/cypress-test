/// <reference types="cypress" />

describe('Example test 1', () => {
  it('Works!', () => {
    cy.visit('/');
    cy.contains('Home').should('be.visible');
  });
});
