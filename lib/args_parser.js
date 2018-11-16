const yargs = require('yargs');

const booleanArg = (aliases, describe) => ({
    alias: aliases,
    describe
});

const requiresArg = (aliases, describe = '', nargs = 1, isString = false) => ({
    alias: aliases,
    describe,
    nargs,
    string: isString,
    requiresArg: true
});

const nonNumeric = [undefined, undefined, true];

function parseArgs() {
    return yargs
        .options({
            n: booleanArg('no-daemon', 'No daemon if flag is present'),
            h: booleanArg('halt-on-change', 'Halt on change if flag is present'),
            d: requiresArg('local-store'),
            mp: requiresArg('max-parallelism'),
            mr: requiresArg('max-retries'),
            w: requiresArg('max-retry-wait'),
            s: booleanArg('secure'),
            e: requiresArg('endpoint', ...nonNumeric),
            c: requiresArg('config-key', ...nonNumeric),
            p: requiresArg('port'),
            t: requiresArg('token', ...nonNumeric),
            f: requiresArg('config-file', ...nonNumeric),
            fs: requiresArg('failure-switch', 'Path to a text file used for Debugging purposes. If the content starts with 1, Consul updates will fail on purpose.', 1, true)
        }).argv;
}

module.exports = { parseArgs }