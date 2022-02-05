<script context="module">
  import { queryNavigation } from '$lib/graphql/queryNavigation';
  import { client } from '$lib/client';

  export const load = async ({ fetch }) => {
    const { data } = await client.query({
      query: queryNavigation
    });

    return {
      props: { navigationQuery: data }
    };
  };
</script>

<script lang="ts">
  import type { NavigationQuery } from '$lib/types/NavQuery';
  import Header from '$lib/components/header/Header.svelte';
  import '../app.css';
  export let navigationQuery: NavigationQuery;
  let links = navigationQuery?.allPages?.edges;
</script>

<Header {links} />

<main class="h-[90vh] w-screen max-w-screen">
  <slot />
</main>
