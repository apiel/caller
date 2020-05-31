export default function caller() {
    const err = new Error();
    const stack = err.stack?.split('\n')[3];
    if (stack) {
        const path = stack.substr(stack.indexOf('(')+1).split(':');
        const file = `${path[0]}:${path[1]}`;
        return file;
    }
}