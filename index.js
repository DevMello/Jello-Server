const yas = require('youtube-audio-server')
yas.setKey(process.env.API_KEY)
const port = 7331
yas.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}.`)
})