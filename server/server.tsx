import express from 'express'

const app = express()

app.use(express.static('public'));

app.set('views', 'public');
app.set('view engine', 'html');

const port = process.env.PORT || 3000

app.get('*', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})