import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    // Files and folders whose names start with "_" (the post template) are not posts.
    pattern: ['**/*.{md,mdx}', '!**/_*.{md,mdx}', '!**/_*/**'],
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
