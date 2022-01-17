<script lang="ts">
  import type { NavigationQuery } from '$lib/types/NavQuery';

  export let navigation: NavigationQuery;

  let edges = navigation?.allPages?.edges;
</script>

<header class="bg-dark-base">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between">
      <div class="flex items-center">
        <a href="/"
          ><h1
            class="font-extrabold font-white-dream text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rudy-base to-aurora-base py-4 pr-4"
          >
            Rudy & Aurora
          </h1>
        </a>
      </div>
      <nav>
        {#each edges as edge}
          <a>{edge?.node?.title[0].text}</a>
        {/each}
      </nav>
    </div>
  </nav>
</header>
