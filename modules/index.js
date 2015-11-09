var merge = require('merge');

module.exports = merge(
  require('./conditional-subfields'),
  require('./devs'),
  require('./label-focus'),
  require('./label-select')
);
