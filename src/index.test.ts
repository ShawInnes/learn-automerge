import {sum, mul} from "./index";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiplies 1 + 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2);
});