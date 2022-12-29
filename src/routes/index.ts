import { fastify, type FastifyRequest, type FastifyReply } from 'fastify'
import logger from '#app/utils/log.js'
import { getItemData, getItemDataByName } from '#app/components/index.js'
import type { IGetItemDataByName } from '#app/routes/routes.types'

export const server = fastify()

server.get(
	'/getItemData',
	async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const result = await getItemData()

			await reply.send({ success: true, result })
		} catch (error: unknown) {
			if (error instanceof Error) {
				logger.error(error.message)
				return reply.status(500).send({ success: false, error: error.message })
			}

			await reply.status(500).send({ success: false })
		}
	},
)

server.get(
	'/getItemDataByName',
	async (request: IGetItemDataByName, reply: FastifyReply) => {
		try {
			const name = request.query.name as string

			const result = await getItemDataByName(name)
			if (!result) await reply.send({ success: false, message: 'Not found' })

			await reply.send({ success: true, result })
		} catch (error: unknown) {
			if (error instanceof Error) {
				logger.error(error.message)
				return reply.status(500).send({ success: false, error: error.message })
			}

			await reply.status(500).send({ success: false })
		}
	},
)
