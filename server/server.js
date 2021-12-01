const net = require('net') // docs: https://nodejs.org/dist/latest-v14.x/docs/api/net.html
const config = require('./config.json') // импортирум конфиг

class Server extends net.Server{
	constructor(props) {
		super(props)

		this.on('connection', (socket) => {

			this.socketEvents(socket)
		})
		this.on('listening', () => {
			console.log(this.address())
		})
		
	}

	socketEvents(socket){
		socket
			.on('error', (err) => console.error(err)) // при ошибке сокета выводим в консоль

			.on('data', (data) => {
				console.log(`Сообщение от:`, socket.address())
				console.log(data.toString('utf-8'))
			})

			.on('end', () => {
				console.log(socket.address(), 'Соединение прервано')
			})
	}
	
}

new Server()
	.listen({ // биндим сервер на host и port
		address: config.address || 'localhost',
		port: config.port || 2550,
		exclusive: true
	})
