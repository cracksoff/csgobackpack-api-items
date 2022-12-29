import { db } from '#app/utils/index.js'
import * as queries from '#app/components/index.queries.js'

export const getItemData = async () => {
	const item = await queries.getItemData.run(undefined, db)

	return item
}

export const getItemDataByName = async (name: string) => {
	const [item] = await queries.getItemDataByName.run({ name }, db)

	return item
}
