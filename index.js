const yas = require('youtube-audio-server')
yas.setKey('AIzaSyBNpjmwdyPybDRJS0YceMc2tcuxgXoF_Bc')
const port = 7331

yas.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port http://localhost:${port}.`)
})

