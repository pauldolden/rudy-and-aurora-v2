export interface NavigationQuery {
  allPages?: AllPages;
}

export interface AllPages {
  edges?: Edge[];
}

export interface Edge {
  node?: Node;
}

export interface Node {
  title?: Title[];
}

export interface Title {
  type?: string;
  text?: string;
  spans?: any[];
}
