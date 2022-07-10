const jwt = require('jsonwebtoken')

const user = {
     name: "Lucas",
     id: "20",
     email: "lukasmarinho2008@gmail.com",
     password: "senha123"
}

const secret = "uhasdhuahdaspfasfjalsfkj"
function createToken () {
     const token = jwt.sign({id: user.id, email: user.email}, secret, {expiresIn: 30})
     console.log(token)
}

function testToken (token) {
     try {
          const validData = jwt.verify(token, secret)
          console.log(validData)
     } catch (error) {
          console.log(error)
     }
}

testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwiZW1haWwiOiJsdWthc21hcmluaG8yMDA4QGdtYWlsLmNvbSIsImlhdCI6MTY1NzIyNzM4NywiZXhwIjoxNjU3MjI3NDE3fQ.EX-RDBxLZA7C6SSUTcbccu-JCg_LB1UZz4ZJCcRGUMo")


