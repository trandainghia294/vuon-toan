import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const [githubOwner, githubRepo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && githubOwner && githubRepo;
const isUserSite = githubRepo === `${githubOwner}.github.io`;

const site = process.env.SITE_URL
  || (isGitHubPagesBuild ? `https://${githubOwner}.github.io` : 'http://localhost:4321');

const base = process.env.BASE_PATH
  || (isGitHubPagesBuild && !isUserSite ? `/${githubRepo}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    }),
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true
    }
  }
});
