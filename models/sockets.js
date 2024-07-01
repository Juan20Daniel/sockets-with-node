class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => { 
            socket.on('client-message', (data) => {
                console.log(data);
                this.io.emit('server-message', data);
                socket.emit('confirm-message', {
                    success:true,
                    message:'El receptor recivio el mensaje.'
                })
            });
        });
   
    }
}

module.exports = Sockets;