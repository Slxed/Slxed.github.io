import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts stay visible in `astro dev` and are omitted from production builds. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Format a frontmatter date as a calendar day. UTC keeps `YYYY-MM-DD` from shifting a day in local timezones. */
export function formatPostDate(date: Date, month: 'short' | 'long' = 'short'): string {
  return new Intl.DateTimeFormat('en-US', {
    month,
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function postPath(id: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/blog/${id}`;
}

export function homeHref(hash = ''): string {
  return `${import.meta.env.BASE_URL}${hash}`;
}

/** Root-relative public/ path, or an absolute URL left unchanged. */
export function publicSrc(src: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(src)) return src;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = src.startsWith('/') ? src : `/${src}`;
  return `${base}${path}`;
}
