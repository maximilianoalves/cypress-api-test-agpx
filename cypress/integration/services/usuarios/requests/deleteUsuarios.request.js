/// <reference types="cypress" />

function apagar(id) {
    return cy.request({
        method: "DELETE",
        url: `usuarios/${id}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}


export {apagar}