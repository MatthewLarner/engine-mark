function engineMark(length){
    var start = Date.now(),
        objects = []

    length = length || 120000;

    for (var i = 0; i < length; i++) {
        objects[i] = {
            value: Math.max(i, Math.floor(Math.random()*length))
        };
    }

    while(objects.length) {
        objects.pop();
    }

    return Math.floor(10000 / (Date.now() - start));
}

module.exports = engineMark;