'use strict';

// Invite interested developers to join us

var log = require('mojular').heisenberg.log;

exports.Devs = {
  init: function () {
    log([
      '      ___          ___       ___\n     /__/\\        /  /\\     /  /\\\n    |  |::\\      /  /::\\   /  /:/\n    |  |:|:\\    /  /:/\\:\\ /__/::\\\n  __|__|:|\\:\\  /  /:/  \\:\\\\__\\/\\:\\\n /__/::::| \\:\\/__/:/ \\__\\:\\  \\  \\:\\\n \\  \\:\\~~\\__\\/\\  \\:\\ /  /:/   \\__\\:\\\n  \\  \\:\\       \\  \\:\\  /:/    /  /:/\n   \\  \\:\\       \\  \\:\\/:/    /__/:/\n    \\  \\:\\       \\  \\::/     \\__\\/\n     \\__\\/        \\__\\/',
      '\n\nLike what you see? Want to make a difference?',
      '\n\nFind out how we\'re making the Ministry Of Justice Digital by Default.',
      '\nhttps://mojdigital.blog.gov.uk/.',
      '\n\nGet in touch to see what positions are available and see what projects you could be working on.',
      '\nhttps://mojdigital.blog.gov.uk/working-at-moj-ds/'
    ].join());
  }
};
