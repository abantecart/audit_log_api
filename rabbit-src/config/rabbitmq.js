console.log(process.env.RABBITMQ_SERVER)

exports.options = {
	server: process.env.RABBITMQ_SERVER,
	queue: process.env.RABBITMQ_QUEUE
}