import process from 'node:process'
import { server } from '#app/routes/index.js'
import logger from '#app/utils/log.js'
import { startParser } from '#app/csgobackpack/index.js'

await server.listen({
	port: Number(process.env.SERVER_PORT ?? 8080),
	host: '0.0.0.0',
})

logger.info({
	message: 'server started',
	port: Number(process.env.SERVER_PORT ?? 8080),
})

await startParser()
