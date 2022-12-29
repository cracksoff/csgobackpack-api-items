import { FastifyRequest } from 'fastify'

export type IGetItemDataByName = FastifyRequest<{
	Querystring: {
		name: string
	}
}>
