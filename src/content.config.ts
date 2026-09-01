import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    section: z.enum(['hat-giong', 'loi-giai-dep', 'cay-chuyen-de', 'nha-kinh']),
    audience: z.enum(['hoc-sinh', 'giao-vien', 'nghien-cuu']),
    topics: z.array(z.string()).default([]),
    grade: z.string().optional(),
    difficulty: z.enum(['co-ban', 'van-dung', 'nang-cao']).optional(),
    readingTime: z.number().int().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
