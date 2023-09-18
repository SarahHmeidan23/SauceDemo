
/// <reference types="cypress"/>
Cypress.Commands.add("ab",(count)=>{
  cy.visit("https://www.saucedemo.com/")
      cy.get('[placeholder="Username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      for (let i = 0; i < count; i++) {
          cy.get('.btn').eq(i).click();  }

      cy.get('.shopping_cart_link').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type("Jan")
      cy.get('[data-test="lastName"]').type("kan")
      cy.get('[data-test="postalCode"]').type("1234") 
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      })

 describe('this is to test the add items', () => {
 it.skip('add first three items to the cart', () => {
  cy.ab(3);
  cy.get('.shopping_cart_badge').invoke('text').should('eql',"3")
 });
 
it('print the name of items in test body', () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get('[placeholder="Username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
 
     cy.get('#inventory_container').find(".inventory_item_name").each((product)=>{

      cy.log(product.text())
      });
      
        const expectedItemNames = [];

      cy.get('#inventory_container').find(".inventory_item_name").first().invoke('text').then((itemName) => {

          cy.log(itemName);
          expectedItemNames.push(itemName);
  
          cy.wrap(expectedItemNames[0]).should('equal', itemName);
        });   
 });
 });
