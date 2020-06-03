export interface Bind {
    cb?: (file: string) => string;
}

export const up = 3;

export default function caller(this: Bind | void, levelUp = up) {
    const err = new Error();
    const stack = err.stack?.split('\n')[levelUp];
    if (stack) {
        return getFile.bind(this)(stack);
    }
}

export function getFile(this: Bind | void, stack: string) {
    stack = stack.substr(stack.indexOf('at ') + 3);
    if (!stack.startsWith('file://')) {
        stack = stack.substr(stack.indexOf('(') + 1);
    }
    const path = stack.split(':');
    let file = `${path[0]}:${path[1]}`;

    if ((this as Bind)?.cb) {
        const cb = (this as Bind).cb as any;
        file = cb(file);
    }
    return file;
}
