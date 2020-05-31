# Caller

Return the filepath of the parent function.

```ts
// File file:///home/hello/parent.ts
import { child } from './child.ts';

function parent() {
    child();
}
```

```ts
// File file:///home/hello/child.ts
import caller from 'https://raw.githubusercontent.com/apiel/caller/master/caller.ts';

export function child() {
    console.log(caller());
    // should return file:///home/hello/parent.ts
}
```