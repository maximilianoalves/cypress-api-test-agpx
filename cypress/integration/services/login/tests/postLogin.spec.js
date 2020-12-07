/// <reference types="cypress" />

import * as PostLogin from '../requests/postLogin.request'


describe('Post Login', () => {
    it('Fazer o login', () => {
        PostLogin.autenticacao().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    });
});