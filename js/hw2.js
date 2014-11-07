function task1(a, b) {
    if (arguments.length == 2) {
        return a <= b ? a : b;
    } else {
        return console.log('need only 2 arguments');
    }
}

function isEvent(a) {
    if (arguments.length == 1 && typeof a === 'number') {
        a < 0 ? a = a * -1 : a;
        if (a == 0 || a == 1) {
            return a == 0 ? console.log(true) : console.log(false);
        } else {
            isEvent(a - 2);
        }
    } else {
        return console.log('entered not number or arguments count > 1');
    }
}

function countBs(str) {
    if (arguments.length == 1 && typeof str === 'string') {
        var s = new String(str);
        var count = 0;

        for (var i = 0; i < s.length; i++) {
            if (s[i] == 'B') {
                count++;
            }
        }
        return console.log('in word ' + str + ' found ' + count + ' B');
    } else {
        return console.log('entered not string or arguments count > 1');
    }
}

function countChar(str, chr) {
    if (arguments.length == 2 && typeof str === 'string' && typeof  chr === 'string') {
        var s = new String(str);
        var count = 0;

        for (var i = 0; i < s.length; i++) {
            if (s[i] == chr) {
                count++;
            }
        }
        return console.log('in word ' + str + ' found ' + count + ' ' + chr);
    } else {
        return console.log('all arguments must be a string or count arguments not equal 2');
    }
}

function alternativeCountBs (str) {

    return countChar(str, 'B');
}