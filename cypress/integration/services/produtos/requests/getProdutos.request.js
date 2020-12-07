/// <reference types="cypress" />

function listar() {
    return cy.request({
        method: "GET",
        url: "produtos",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}


export {listar}