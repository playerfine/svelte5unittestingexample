import { test } from 'vitest';

import Counter from './counter.svelte';
import { render } from '@testing-library/svelte';

test('counter', () => {
  console.log(render(Counter));
});
