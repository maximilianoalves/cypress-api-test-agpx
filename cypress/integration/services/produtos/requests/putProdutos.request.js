/// <reference types="cypress" />

const payloadAlterarProduto = require('../payloads/alterar-produto.payload.json')

function alterar(auth) {
    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAlterarProduto
    })
}


export {alterar}