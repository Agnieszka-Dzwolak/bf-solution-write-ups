'use strict';

import { getFirstValue } from './solution1.js';

describe('Basic Tests', () => {
    test('should return first value from the array', () => {
        expect(getFirstValue([1, 2, 3])).toEqual(1);
    });
    test('should return 80', () => {
        expect(getFirstValue([80, 5, 100])).toEqual(80);
    });
    test('should return -500', () => {
        expect(getFirstValue([-500, 0, 50])).toEqual(-500);
    });
    test('should return -52320', () => {
        expect(getFirstValue([-52320, 0, 50])).toEqual(-52320);
    });
});
