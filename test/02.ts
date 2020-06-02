import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { getFile } from '../caller.ts';

const files = [
    [
        '     at Object.Item [as component] (file:///home/alex/demo/pages/item/[id].page.tsx:13:13)',
        'file:///home/alex/demo/pages/item/[id].page.tsx',
    ],
    [
        '     at file:///home/alex/demo/pages/Product/[color]/[id].page.tsx:20:16',
        'file:///home/alex/demo/pages/Product/[color]/[id].page.tsx',
    ],
    [
        '     at file:///home/alex/demo/pages/Product/(color)/[id].page.tsx:20:16',
        'file:///home/alex/demo/pages/Product/(color)/[id].page.tsx',
    ],
];

if (import.meta.main) {
    files.forEach(f => console.log(getFile(f[0]), '<=>', f[1]));
} else {
    Deno.test('render title', async () => {
        assertEquals(getFile(files[0][0]), files[0][1]);
        assertEquals(getFile(files[1][0]), files[1][1]);
        assertEquals(getFile(files[2][0]), files[2][1]);
    });
}
