/* global cy */
import { mount } from '@cypress/react'

describe('The training app should', () => {
  it('load and display the events', () => {
    cy.intercept('GET', '**/event', { fixture: 'events.json' }).as('getEvents')

    cy.visit('http://localhost:3000');

    cy.contains('Training')
    cy.contains('Spiel')
    cy.contains('Füchse Berlin')
  })
})