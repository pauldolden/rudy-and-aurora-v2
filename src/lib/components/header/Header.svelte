<script lang="ts">
  import type { Edge } from '$lib/types/NavQuery';
  import { slugify } from '$lib/utils/slugify';

  export let links: Edge[];

  let staticLinks = ['Gallery', 'Contact'];
</script>

<header data-testid="header" class="bg-dark-base w-screen max-w-screen">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between">
      <div class="flex items-center">
        <a href="/">
          <h1
            class="font-extrabold font-white-dream text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rudy-base to-aurora-base py-4 pr-4"
          >
            Rudy & Aurora
          </h1>
        </a>
      </div>
      <nav
        class="flex gap-4 text-transparent bg-clip-text bg-gradient-to-r from-rudy-base to-aurora-base py-4 pr-4"
      >
        {#if Array.isArray(links)}
          {#each links as link}
            <a
              data-testid="cms-page-links"
              class="font-cormorant font-bold text-2xl hover:text-red-100 transition-colors duration-500"
              href={slugify(link?.node?.title[0].text)}>{link?.node?.title[0].text}</a
            >
          {/each}
        {/if}
        {#each staticLinks as link}
          <a
            class="font-cormorant font-bold text-2xl hover:text-red-100 transition-colors duration-500"
            href={slugify(link)}>{link}</a
          >
        {/each}
      </nav>
    </div>
  </nav>
  <div class="h-2 bg-gradient-to-l from-rudy-base to-aurora-base" />
</header>
