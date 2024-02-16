export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	author: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}