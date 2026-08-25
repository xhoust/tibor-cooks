import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional().default(''),
		difficulty: z.enum(['Easy', 'Intermediate', 'Advanced']).optional().default('Intermediate'),
		time: z.string().optional().default('Takes Time'),
		category: z.string().optional().default('Slovak Classic'),
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };