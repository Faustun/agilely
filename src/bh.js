/*
 * @Author: faustun
 * @Description: file content
 * @Date: 2019-03-26 09:20:05
 * @LastEditTime: 2019-03-26 09:34:56
 */

/** Hexadecimal array for conversion. */
const HEX_ARRAY = [{
  key: 0,
  val: '0000'
}, {
  key: 1,
  val: '0001'
}, {
  key: 2,
  val: '0010'
}, {
  key: 3,
  val: '0011'
}, {
  key: 4,
  val: '0100'
}, {
  key: 5,
  val: '0101'
}, {
  key: 6,
  val: '0110'
}, {
  key: 7,
  val: '0111'
}, {
  key: 8,
  val: '1000'
}, {
  key: 9,
  val: '1001'
}, {
  key: 'A',
  val: '1010'
}, {
  key: 'B',
  val: '1011'
}, {
  key: 'C',
  val: '1100'
}, {
  key: 'D',
  val: '1101'
}, {
  key: 'E',
  val: '1110'
}, {
  key: 'F',
  val: '1111'
}]

/**
 * @description: Hexadecimal to binary.
 * @param {String} Hexadecimal string.
 * @return: {String} binary.
 */
const hexToBin = function (str) {
  let value = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < HEX_ARRAY.length; j++) {
      if (str.charAt(i) == HEX_ARRAY[j].key) { // eslint-disable-line
        value = value.concat(HEX_ARRAY[j].val)
        break
      }
    }
  }
  return value
}

/**
 * @description: Binary to hexadecimal.
 * @param {String} Binary string.
 * @return: {String} Hexadecimal.
 */
const binToHex = function (str) {
  let value = ''
  let list = []
  if (str.length % 4 !== 0) {
    let a = '0000'
    let b = a.substring(0, 4 - str.length % 4)
    str = b.concat(str)
  }
  while (str.length > 4) {
    list.push(str.substring(0, 4))
    str = str.substring(4)
  }
  list.push(str)
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < HEX_ARRAY.length; j++) {
      if (list[i] == HEX_ARRAY[j].val) { // eslint-disable-line
        value = value.concat(HEX_ARRAY[j].key)
        break
      }
    }
  }
  return value
}