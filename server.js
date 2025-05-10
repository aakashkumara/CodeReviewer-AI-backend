require('dotenv').config()
const app = require('./src/app')



app.listen(`https://code-reviewer-ai-frontend-two.vercel.app/`, () => {
    console.log('Server is running on http://localhost:3000')
})
