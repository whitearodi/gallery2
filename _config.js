var config = {}

// Update to have your correct username and password
// config.mongoURI = {
//     production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
//     development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
//     test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
// }

config.mongoURI = {
    production: 'mongodb+srv://delonowano:Hallo200!@cluster-gallery.f6f4vuh.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster-gallery',
    development: 'mongodb+srv://delonowano:Hallo200!@cluster-gallery.f6f4vuh.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster-gallery',
    test: 'mongodb+srv://delonowano:Hallo200!@cluster-gallery.f6f4vuh.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster-gallery',
}
module.exports = config;
