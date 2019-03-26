const DateFormat = require('./date');
const Dom = require('./dom');
const Bh = require('./bh');

const Utils = {
  parseTime: DateFormat.parseTime,
  formatTime: DateFormat.formatTime,
  hasClass: Dom.hasClass,
  addClass: Dom.addClass,
  removeClass: Dom.removeClass,
  hexToBin: Bh.hexToBin,
  binToHex: Bh.binToHex
}

module.exports = Utils;