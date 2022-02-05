/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
// @ts-ignore
import Header from '$lib/components/header/Header.svelte';
import navItems from '$lib/fixtures/navItems';
import { slugify } from '$lib/utils/slugify';

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('<Header />', () => {
  it('appears on the page', () => {
    const { getByTestId } = render(Header);
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('Logo renders correctly', () => {
    const { getByText } = render(Header);
    const logo = getByText('Rudy & Aurora');

    expect(logo).toBeVisible();
  });

  it('renders CMS links correctly', () => {
    const { getAllByTestId } = render(Header, { links: navItems });
    let cmsLinks = getAllByTestId('cms-page-links');
    expect(cmsLinks.length).toEqual(navItems.length);

    cmsLinks.forEach((link, i) => {
      expect(link).toHaveTextContent(navItems[i].node.title[0].text);
    });
  });

  it('transforms CMS slugs correctly', () => {
    const { getAllByTestId } = render(Header, { links: navItems });
    let cmsLinks = getAllByTestId('cms-page-links');

    cmsLinks.forEach((link, i) => {
      expect(link).toHaveAttribute('href', slugify(navItems[i].node.title[0].text));
    });
  });
});
