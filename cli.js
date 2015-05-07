#!/usr/bin/env node
'use strict';
var meow = require('meow');
var hyaocukModule = require('./');

var cli = meow({
  help: [
    'Usage',
    '  hyaocuk-module <input>',
    '',
    'Example',
    '  hyaocuk-module Unicorn'
  ].join('\n')
});

hyaocukModule(cli.input[0]);
