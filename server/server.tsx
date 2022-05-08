import express from 'express'

const app = express()

app.use(express.static('dist.client'));

const port = process.env.PORT || 3000

app.get('(.*)', (req, res) => {
    res.sendFile('index.html', { root: '.' })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})