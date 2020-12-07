import Joi from 'joi'

const usuariosSchema = Joi.object({
    quantidade: Joi.number(),
    usuarios: Joi.array().items(
        Joi.object({
            nome: Joi.string(),
            email: Joi.string(),
            password: Joi.string(),
            administrador: Joi.string(),
            _id: Joi.string()
        })
    )
})

export default usuariosSchema