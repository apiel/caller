export const up = 3;

export default function caller(levelUp = up) {
    const err = new Error();
    const stack = err.stack?.split('\n')[levelUp];
    if (stack) {
        return getFile(stack);
    }
}

function getFile(stack: string) {
    stack = stack.substr(stack.indexOf('at ') + 3);
    if (!stack.startsWith('file://')) {
        stack = stack.substr(stack.indexOf('(') + 1);
    }
    const path = stack.split(':');
    const file = `${path[0]}:${path[1]}`;
    return file;
}

if (import.meta.main) {
    console.log(
        getFile(
            '     at Object.Item [as component] (file:///home/alex/demo/pages/item/[id].page.tsx:13:13)',
        ),
    );
    console.log(
        getFile(
            '     at file:///home/alex/demo/pages/Product/[color]/[id].page.tsx:20:16',
        ),
    );
    console.log(
        getFile(
            '     at file:///home/alex/demo/pages/Product/(color)/[id].page.tsx:20:16',
        ),
    );
}
