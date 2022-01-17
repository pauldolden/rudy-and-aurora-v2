import { gql } from 'graphql-tag';
export const queryNavigation = gql`
  {
    allPages {
      edges {
        node {
          title
        }
      }
    }
  }
`;
