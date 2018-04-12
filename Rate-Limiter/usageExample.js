/*
Description: Limits the number of calls that can be made from a given IP per minute. Userful for expensive computations or for Baqend code that uses rate-limited 3rd party APIs.
Required npm modules: node-cache, limiter
Maintained by: Baqend, support@baqend.com
*/

//Import Rate Limiter
const Limiter = require('./rateLimiter');
exports.call = function (db, data, req) {
    //Check if IP is rate-limited
    if(Limiter.isRateLimited(req, 50)) {
        throw new Abort('Too many requests.');
    }
    // do stuff
}
