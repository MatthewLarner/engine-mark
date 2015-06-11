function engineMark(){
    var start = Date.now();

    var length = 100000,
        objects = []

    for (var i = 0; i < length; i++) {
        objects[i] = {
            value: Math.max(i, Math.floor(Math.random()*length))
        };
    }

    return Math.floor(10000 / (Date.now() - start));
}

module.exports = engineMark;