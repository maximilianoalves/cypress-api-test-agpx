import * as PostUsuarios from '../requests/postUsuarios.request'
import * as DeleteUsuarios from '../requests/deleteUsuarios.request'

describe('Post Usuario', () => {
    it('Adicionar um novo usuário', () => {
        PostUsuarios.adicionar().should((resNovoUsuario) => {
            expect(resNovoUsuario.status).to.eq(201)
            expect(resNovoUsuario.body.message).to.eq('Cadastro realizado com sucesso')
            DeleteUsuarios.apagar(resNovoUsuario.body._id).should((resApagarUsuario) => {
                expect(resApagarUsuario.status).to.eq(200)
                expect(resApagarUsuario.body.message).to.eq('Registro excluído com sucesso')
            })
        })
    });
});