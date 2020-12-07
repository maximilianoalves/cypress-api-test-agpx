/// <reference types="cypress" />

const payloadAddProduto = require('../payloads/add-produto.payload.json')

function adicionar(auth) {
    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddProduto
    })
}


export {adicionar}