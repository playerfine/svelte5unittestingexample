# Unit test example

## Get started

```sh
npm install
```

## Failure

Run test:

```sh
npm test
```

Observe:

```
 FAIL  |@svelteunit/counter| src/lib/counter.spec.js > counter
Svelte error: rune_outside_svelte
The `$state` rune is only available inside `.svelte` and `.svelte.js/ts` files
 ❯ Module.rune_outside_svelte ../../node_modules/svelte/src/internal/client/errors.js:304:17
    303|   const error = new Error(`state_descriptors_fixed\nProperty descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.`);
    304|
    305|   error.name = 'Svelte error';
       |                ^
    306|   throw error;
    307|  } else {
 ❯ get ../../node_modules/svelte/src/internal/client/runtime.js:1197:28
 ❯ mount ../../node_modules/@testing-library/svelte/src/core/modern.svelte.js:26:17
 ❯ Module.render ../../node_modules/@testing-library/svelte/src/pure.js:72:21
 ❯ src/lib/counter.spec.js:7:
```

## Workaround

To resolve the failure, you can add to `libs/counter/package.json`:

```diff
  {
    "name": "@svelteunit/counter",
    "version": "0.0.1",
    "private": true,
-   "type": "module"
+   "type": "module",
+   "devDependencies": {
+     "@testing-library/svelte": "^5.2.3"
+   }
  }
```
