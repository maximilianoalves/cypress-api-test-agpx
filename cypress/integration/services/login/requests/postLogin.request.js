/// <reference types="cypress" />

const payloadLogin = require('../payloads/login.payload.json')

function autenticacao() {
    return cy.request({
        method: "POST",
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadLogin
    })
}


export {autenticacao}