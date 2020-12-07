import * as GetProdutos from '../requests/getProdutos.request'
import produtosSchema from '../contracts/produtos.contract'

describe('Get Produtos', () => {
    it('Listar os produtos cadastrados', () => {
        GetProdutos.listar().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    });

    it('Validar o contrato da listagem de produtos', () => {
        GetProdutos.listar().should((response) => {
            return produtosSchema.validateAsync(response.body)
        })
    });
});