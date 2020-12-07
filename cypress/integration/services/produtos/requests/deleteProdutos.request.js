/// <reference types="cypress" />

function apagar(id, auth) {
    return cy.request({
        method: "DELETE",
        url: `produtos/${id}`,
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false
    })
}


export {apagar}