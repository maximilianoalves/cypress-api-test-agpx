/// <reference types="cypress" />

const payloadAddUsuario = require('../payloads/add-usuario.payload.json')

function adicionar() {
    return cy.request({
        method: "POST",
        url: "usuarios",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadAddUsuario

    })
}


export {adicionar}