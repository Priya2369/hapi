const userRoute = require('./user.route');

const userModule = {
    name: 'userModule',
    pkg: require('../package.json'),
    register:  (server, options) => {
        server.route(userRoute);
    },
};

module.exports = userModule;