var merge = require('merge');

module.exports = merge(
  require('./conditional-subfields'),
  require('./label-focus'),
  require('./label-select')
);
