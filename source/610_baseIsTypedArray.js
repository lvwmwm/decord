// Module ID: 610
// Function ID: 7048
// Name: baseIsTypedArray
// Dependencies: [577, 596, 578]

// Module 610 (baseIsTypedArray)
const obj = {};
obj["[object Uint32Array]"] = true;
obj["[object Uint16Array]"] = true;
obj["[object Uint8ClampedArray]"] = true;
obj["[object Uint8Array]"] = true;
obj["[object Int32Array]"] = true;
obj["[object Int16Array]"] = true;
obj["[object Int8Array]"] = true;
obj["[object Float64Array]"] = true;
obj["[object Float32Array]"] = true;
obj["[object WeakMap]"] = false;
obj["[object String]"] = false;
obj["[object Set]"] = false;
obj["[object RegExp]"] = false;
obj["[object Object]"] = false;
obj["[object Number]"] = false;
obj["[object Map]"] = false;
obj["[object Function]"] = false;
obj["[object Error]"] = false;
obj["[object Date]"] = false;
obj["[object DataView]"] = false;
obj["[object Boolean]"] = false;
obj["[object ArrayBuffer]"] = false;
obj["[object Array]"] = false;
obj["[object Arguments]"] = false;

export default function baseIsTypedArray(arg0) {
  let tmp = require(577) /* isObjectLike */(arg0);
  if (tmp) {
    tmp = require(596) /* isLength */(arg0.length);
  }
  if (tmp) {
    tmp = obj[require(undefined, 578) /* getTag */(undefined, arg0)];
  }
  return tmp;
};
