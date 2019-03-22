const DateFormat = require('./date');
const Dom = require('./dom');
const Utils = {
  parseTime: DateFormat.parseTime,
  formatTime: DateFormat.formatTime,
  hasClass: Dom.hasClass,
  addClass: Dom.addClass,
  removeClass: Dom.removeClass
}
module.exports = Utils;