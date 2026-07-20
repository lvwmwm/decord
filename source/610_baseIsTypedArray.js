// Module ID: 610
// Function ID: 7048
// Name: baseIsTypedArray
// Dependencies: []

// Module 610 (baseIsTypedArray)
const obj = {};
obj.[object Uint32Array] = true;
obj.[object Uint16Array] = true;
obj.[object Uint8ClampedArray] = true;
obj.[object Uint8Array] = true;
obj.[object Int32Array] = true;
obj.[object Int16Array] = true;
obj.[object Int8Array] = true;
obj.[object Float64Array] = true;
obj.[object Float32Array] = true;
obj.[object WeakMap] = false;
obj.[object String] = false;
obj.[object Set] = false;
obj.[object RegExp] = false;
obj.[object Object] = false;
obj.[object Number] = false;
obj.[object Map] = false;
obj.[object Function] = false;
obj.[object Error] = false;
obj.[object Date] = false;
obj.[object DataView] = false;
obj.[object Boolean] = false;
obj.[object ArrayBuffer] = false;
obj.[object Array] = false;
obj.[object Arguments] = false;

export default function baseIsTypedArray(arg0) {
  let tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    tmp = require(dependencyMap[1])(arg0.length);
  }
  if (tmp) {
    tmp = obj[closure_0(undefined, closure_1[2])(undefined, arg0)];
  }
  return tmp;
};
