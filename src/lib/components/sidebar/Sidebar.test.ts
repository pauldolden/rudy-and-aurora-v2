/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Sidebar from '$lib/components/header/Sidebar.svelte';

describe('<Sidebar />', () => {
  it('should appear on the page', () => {
    const { getByTestId } = render(Sidebar);
    const sidebar = getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
  });

  it('should contain a nav', () => {
    const { getByTestId } = render(Sidebar);
    const sidebar = getByTestId('sidebar');
    const nav = getByTestId('nav');

    expect(sidebar).toContainElement(nav);
  });
});
