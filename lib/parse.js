var _      = require('lodash'),
    moment = require('moment');

/**
 * Define default vocabulary and RegExp
 */

var vocabulary = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


var regexp = {
        daySplit: /\n/g,
        dayMatch: /(\w+):(.+)/,
        hoursSplit: /\s/g,
        hoursMatch: /([0-9:]+)[\s-]+([0-9:]+)/
    };


/**
 * Expose `parse`
 */

module.exports = parse;


/**
 * Parse
 *
 * @param  {Mixed} text
 * @param  {[Object]} options
 * @return {Object}
 */

function parse (text, options) {
    if (typeof text != 'string')
        return text;

    options = options || {};

    var result = [];

    var dayNames = options.vocabulary || vocabulary;

    _.defaults(options, regexp);

    text.trim()
        .split(options.daySplit)
        .forEach(function(day){
            var arr = day.match(options.dayMatch);

            var dayName = arr[1],
                dayHours = arr[2]
                    .trim()
                    .split(options.hoursSplit);

            var nthDay = dayNames.indexOf(dayName),
                offset = nthDay * 1440;

            dayHours.forEach(function(str){
                var arr = rangeToHours(str, offset);

                result.push({
                    dayOfWeek : vocabulary[nthDay],
                    opens     : arr[0],
                    closes    : arr[1]
                });
            });
        });

    function rangeToHours (str, offset) {
        return str
            .match(options.hoursMatch)
            .slice(1);
    }

    return result;
};
