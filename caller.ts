export const up = 3;

export default function caller(levelUp = up) {
    const err = new Error();
    const stack = err.stack?.split('\n')[levelUp];
    if (stack) {
        return getFile(stack);
    }
}

export function getFile(stack: string) {
    stack = stack.substr(stack.indexOf('at ') + 3);
    if (!stack.startsWith('file://')) {
        stack = stack.substr(stack.indexOf('(') + 1);
    }
    const path = stack.split(':');
    const file = `${path[0]}:${path[1]}`;
    return file;
}
