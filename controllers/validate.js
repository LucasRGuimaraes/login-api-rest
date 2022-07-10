const Joi = require('@hapi/joi')


const validator = {
     registerValidate: function (data) {
          const schema = Joi.object({
               name: Joi.string().required().min(3).max(50),
               email: Joi.string().required().min(5).max(100),
               password: Joi.string().required().min(8).max(200),
          })
     
          return schema.validate(data)
     },

     loginValidate: function (data) {
          const schema = Joi.object({
               email: Joi.string().required().min(5).max(100),
               password: Joi.string().required().min(8).max(200),
          })
     
          return schema.validate(data)
     }
}

module.exports = validator