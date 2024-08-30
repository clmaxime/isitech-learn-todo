import { expect, test } from 'vitest';

export function multiple(a: number, b: number) {
    return a * b;
}

test("multiply 1 by 2 to equals 2", () => {
    expect(1 * 2).toBe(2)
})