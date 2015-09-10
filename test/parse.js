var assert = require('assert');

var fs = require('fs');

var parse = require('..');

var data = fs.readFileSync(__dirname + '/data.txt', 'utf8'),
    dataDe = fs.readFileSync(__dirname + '/data-de.txt', 'utf8');


describe('Parse', function() {
    it('should be a function', function() {
        assert.equal(typeof parse, 'function');
    });

    var arr = [
            { dayOfWeek: 'Monday', opens: '10:00', closes: '14:00' },
            { dayOfWeek: 'Monday', opens: '15:00', closes: '21:00' },
            { dayOfWeek: 'Tuesday', opens: '10:00', closes: '14:00' },
            { dayOfWeek: 'Tuesday', opens: '15:00', closes: '21:00' },
            { dayOfWeek: 'Wednesday', opens: '10:00', closes: '14:00' },
            { dayOfWeek: 'Wednesday', opens: '15:00', closes: '21:00' },
            { dayOfWeek: 'Thursday', opens: '10:00', closes: '14:00' },
            { dayOfWeek: 'Thursday', opens: '15:00', closes: '21:00' },
            { dayOfWeek: 'Friday', opens: '10:00', closes: '14:00' },
            { dayOfWeek: 'Friday', opens: '15:00', closes: '21:00' },
            { dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' }
        ];

    it('should return a proper array', function() {
        assert.deepEqual(parse(data), arr);
    });

    it('should be configurable', function() {
        var options = {
                vocabulary: ['Mon','Die','Mit','Don','Fre','Sam','Son'],
                dayMatch: /(\w+)\.:(.+)/,
                hoursSplit: /,\s/g
            };

        assert.deepEqual(parse(dataDe, options), arr);
    });
});
