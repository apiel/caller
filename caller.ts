export const defaultLevelUp = 3;

export function callerUp(level: number) {
    return caller(defaultLevelUp + level);
}

export default function caller(levelUp = defaultLevelUp) {
    const err = new Error();
    const stack = err.stack?.split('\n')[levelUp];
    if (stack) {
        const path = stack.substr(stack.indexOf('(')+1).split(':');
        const file = `${path[0]}:${path[1]}`;
        return file;
    }
}
