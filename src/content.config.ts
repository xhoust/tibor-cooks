import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		course: z.string().optional(),
		yield: z.string().optional(),
		prepTime: z.string().optional(),
		cookTime: z.string().optional(),
		author: z.string().optional(),
	}),
});

export const collections = { blog };