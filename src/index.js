const express = require('express')
const app = express()

app.get('/', (request, response) => {
    return response.json({ 
        Nome: 'Galan Luan' 
        ,Idade: '99'
        
    })
})



// app.get('/', (request, response) => {
//     return response.json({ Idade: '99' })
// })

app.listen(3000, () => {
    console.log('server started on port 3000!🏆')

}
    )