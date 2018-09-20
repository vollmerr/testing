exports.usingForEach = async (data, func) => {
    const records = [];
    data.forEach(async (x) => {
        const record = await func(x);
        records.push(record);
    });
    return records;
};

exports.usingPromiseAll = async (data, func) => {
    const promises = [];
    data.forEach((x) => {
        const promise = func(x);
        promises.push(promise);
    });
    const records = await Promise.all(promises);
    return records;
};

exports.usingForLoop = async (data, func) => {
    const records = [];
    for (let i = 0; i < data.length; i += 1) {
        const record = await func(data[i]);
        records.push(record);
    }
    return records;
};

exports.usingPromiseEach = async (data, func) => {
    if (!Promise.each) throw new Error('need bluebird...');
    const records = await Promise.each(data, func);
    return records;
}

exports.usingPromiseMap = async (data, func) => {
    if (!Promise.map) throw new Error('need bluebird...');
    const records = await Promise.map(data, func);
    return records;
}
