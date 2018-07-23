exports.a = () => {
    exports.c();
    console.log('this is a');
};

exports.b = () => {
    exports.a(); // same file export, use exports. to allow mocking easier
    console.log('this is b');
};

exports.c = () => {
    console.log('this is c');
};