const net = require('net') // docs: https://nodejs.org/dist/latest-v14.x/docs/api/net.html
const dns = require('dns') // docs: 
const os = require('os') // docs: 
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
			.on('connect', () => { // при новом подключении
				console.log(`Новое подключение: ${socket.address}`) //показываем ip
			})
			.on('data', (data) => {
				console.log(data)
			})
			.on('disconnect', () => {
				console.log('disconnect')
			})
	}
	
}

new Server()
	.listen({ // биндим сервер на host и port
		address: 'localhost',
		port: config.port || 2550,
		exclusive: true
	})
