var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: 9000,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('./../certificates/privkey1.pem', 'utf8'),
        cert: fs.readFileSync('./../certificates/cert1.pem', 'utf8')
    }
});
