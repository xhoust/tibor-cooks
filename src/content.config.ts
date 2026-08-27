import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recipes' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		course: z.string().optional(),
		yield: z.string().optional(),
		prepTime: z.string().optional(),
		cookTime: z.string().optional(),
		author: z.string().optional(),
	}),
});

const journal = defineCollection({
	loader: glob({ base: './src/content/journal', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		chapter: z.string().optional(),
	}),
});

export const collections = { recipes, journal };