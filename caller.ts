export const base = 3;

export default function caller(levelUp = base) {
    const err = new Error();
    const stack = err.stack?.split('\n')[levelUp];
    if (stack) {
        const path = stack.substr(stack.indexOf('(')+1).split(':');
        const file = `${path[0]}:${path[1]}`;
        return file;
    }
}
