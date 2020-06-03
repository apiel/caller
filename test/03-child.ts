import caller from '../caller.ts';

export function fn2() {
    const file = caller.bind({ cb: (file) => file.replace('file:///', '/') })();

    const expectedFile = import.meta.url
        .replace('03-child.ts', '03.ts')
        .replace('file:///', '/');
    if (file !== expectedFile) {
        throw new Error(
            `Unexpected caller result ${file} instead of ${expectedFile}`,
        );
    } else {
        console.log('Caller:', file);
    }
}
