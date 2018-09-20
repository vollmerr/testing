const faker = require('faker');
const bluebird = require('bluebird');

const asyncLoop = require('../async-loop');

faker.seed(1337);

const withErrors = false;
const data = Array(1000).fill(0).map((x, i) => i);
const numbers = Array(1000).fill(faker.random.number({ min: 1, max: 10 }));

const getItem = (x) => new Promise((res, rej) => (
    setTimeout(withErrors ? rej : res, numbers[x % numbers.length], x)
));

describe('async loops', () => {
    it('usingForEach (DOES NOT WAIT FOR ASYNC)\t', async () => {
        const result = await asyncLoop.usingForEach(data, getItem);
        expect(result).not.toEqual(data);
    });

    it('usingPromiseAll\t\t\t\t', async () => {
        const result = await asyncLoop.usingPromiseAll(data, getItem);
        expect(result).toEqual(data);
    });

    it('usingForLoop\t\t\t\t', async () => {
        const result = await asyncLoop.usingForLoop(data, getItem);
        expect(result).toEqual(data);
    });
});

describe('async loops with bluebird', () => {
    beforeAll(() => {
        Promise = bluebird;
    });

    it('usingForEach (DOES NOT WAIT FOR ASYNC)\t', async () => {
        const result = await asyncLoop.usingForEach(data, getItem);
        expect(result).not.toEqual(data);
    });

    it('usingPromiseAll\t\t\t\t', async () => {
        const result = await asyncLoop.usingPromiseAll(data, getItem);
        expect(result).toEqual(data);
    });

    it('usingForLoop\t\t\t\t', async () => {
        const result = await asyncLoop.usingForLoop(data, getItem);
        expect(result).toEqual(data);
    });

    it('usingPromiseEach\t\t\t\t', async () => {
        const result = await asyncLoop.usingPromiseEach(data, getItem);
        expect(result).toEqual(data);
    });

    it('usingPromiseMap\t\t\t\t', async () => {
        const result = await asyncLoop.usingPromiseMap(data, getItem);
        expect(result).toEqual(data);
    });
});