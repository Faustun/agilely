/*
 * @Author: faustun
 * @Description: file content
 * @Date: 2019-03-22 14:45:35
 * @LastEditTime: 2019-03-22 15:32:23
 */

/**
 * @description: Checks if an element has the specified CSS class.
 * @param {!Element} element DOM element to check.
 * @param {string} className Name of class to check.
 * @return: {boolean} True if class exists, false otherwise.
 */
const hasClass = function(element, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(element.className)
}

/**
 * @description: Add a CSS class to a element.
 * @param {!Element} element DOM element to remove class from.
 * @param {string} className Name of class to add.
 * @return: {boolean} True if class was added, false if already present.
 */
const addClass = function(element, className) {
  if (hasClass(element, className)) {
    return
  }
  let newClass = element.className.split(' ')
  newClass.push(className)
  element.className = newClass.join(' ')
}

/**
 * @description: Remove a CSS class from a element.
 * @param {!Element} element DOM element to remove class from.
 * @param {string} className Name of class to remove.
 * @return: {boolean} True if class was removed, false if never present.
 */
const removeClass = function(element, className) {
  if (hasClass(element, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    element.className = element.className.replace(reg, '')
  }
}

module.exports = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};