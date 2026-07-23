// Module ID: 1333
// Function ID: 15646
// Name: hasBit
// Dependencies: [2]
// Exports: addBit, isSerializedUint8Array, isUint8Array, removeBit

// Module 1333 (hasBit)
function hasBit(dismissedContents, closure_0) {
  let tmp = 0 !== dismissedContents.length;
  if (tmp) {
    const _Math = Math;
    tmp = dismissedContents[Math.floor(Math, closure_0 / 8)] & 1 << closure_0 % 8;
  }
  return tmp;
}
let result = require("set").fileFinishedImporting("utils/Uint8ArrayUtils.tsx");

export { hasBit };
export const addBit = function addBit(dismissedContents, closure_0) {
  const rounded = Math.floor(closure_0 / 8);
  let tmp2 = dismissedContents;
  if (dismissedContents.length <= rounded) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(rounded + 1);
    const result = uint8Array.set(dismissedContents, 0);
    tmp2 = uint8Array;
  }
  tmp2[rounded] = tmp2[rounded] | 1 << closure_0 % 8;
  return tmp2;
};
export const removeBit = function removeBit(dismissedContents, closure_0) {
  if (hasBit(dismissedContents, closure_0)) {
    const _Math = Math;
    const rounded = Math.floor(closure_0 / 8);
    dismissedContents[rounded] = dismissedContents[rounded] & ~1 << closure_0 % 8;
  }
  return dismissedContents;
};
export const isUint8Array = function isUint8Array(arg0) {
  return arg0 instanceof Uint8Array;
};
export const isSerializedUint8Array = function isSerializedUint8Array(__tag__) {
  let tmp = null != __tag__;
  if (tmp) {
    tmp = "object" === typeof __tag__;
  }
  if (tmp) {
    tmp = "uint8array" === __tag__.__tag__;
  }
  return tmp;
};
