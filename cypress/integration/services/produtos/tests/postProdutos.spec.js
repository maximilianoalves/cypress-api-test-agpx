/// <reference types="cypress" />

import * as PostProdutos from '../requests/postProdutos.request'
import * as PostLogin from '../../login/requests/postLogin.request'
import * as DeleteProdutos from '../requests/deleteProdutos.request'

describe('Post Produtos', () => {
    it('Adicionar um produto', () => {
        PostLogin.autenticacao().should((response) => {
            expect(response.status).to.eq(200)
            PostProdutos.adicionar(response.body.authorization).should((resProduto) => {
                expect(resProduto.status).to.eq(201)
                expect(resProduto.body.message).to.eq('Cadastro realizado com sucesso')
                DeleteProdutos.apagar(resProduto.body._id, response.body.authorization).should((resDelete) => {
                    expect(resDelete.status).to.eq(200)
                    expect(resDelete.body.message).to.eq('Registro excluído com sucesso')
                })
            })
        })
    });
});