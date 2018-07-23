// import sameFile from '../same-file'; // same as line below
const sameFile = require('../same-file');
const { a, b, c } = sameFile;

console.log = jest.fn();

describe('same-file', () => {
    it('should call the mock fn in the same file', () => {
        sameFile.a = jest.fn();
        sameFile.c = jest.fn();

        b();
        expect(sameFile.a).toHaveBeenCalled();
        expect(sameFile.c).not.toHaveBeenCalled();

        sameFile.a = a;
        sameFile.c = c;
    });

    it('should restore to the original', () => {
        sameFile.c = jest.fn();

        b();
        expect(sameFile.c).toHaveBeenCalled();

        sameFile.c = c;
    });
});