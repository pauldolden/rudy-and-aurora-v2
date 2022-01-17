<script context="module">
  import { queryNavigation } from '$lib/graphql/queryNavigation';
  import { client } from '$lib/client';

  export const load = async ({ fetch }) => {
    const { data } = await client.query({
      query: queryNavigation
    });

    return {
      props: { navigation: data }
    };
  };
</script>

<script lang="ts">
  import Header from '$lib/components/header/Header.svelte';
  import '../app.css';
  import type { NavigationQuery } from '$lib/types/NavQuery';
  export let navigation: NavigationQuery;
</script>

<Header {navigation} />

<main>
  <slot />
</main>
