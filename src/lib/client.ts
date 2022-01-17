import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

export const client = new ApolloClient({
  link: PrismicLink({
    uri: `https://${import.meta.env.VITE_PRISMIC_REPO_ID}.cdn.prismic.io/graphql`,
    accessToken: import.meta.env.VITE_PRISMIC_TOKEN
  }),
  cache: new InMemoryCache()
});
