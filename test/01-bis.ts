import caller from '../caller.ts';

export function fn2() {
    const file = caller();

    const expectedFile = import.meta.url.replace('01-bis.ts', '01.ts');
    if (file !== expectedFile) {
        throw new Error(`Unexpected caller result ${file} instead of ${expectedFile}`);
    } else {
        console.log('Caller:', file);
    }
}