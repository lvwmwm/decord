// Module ID: 1333
// Function ID: 15640
// Name: hasBit
// Dependencies: [284214097]
// Exports: addBit, isSerializedUint8Array, isUint8Array, removeBit

// Module 1333 (hasBit)
function hasBit(dismissedContents, CHANNEL_NOTICE_INVITE) {
  let tmp = 0 !== dismissedContents.length;
  if (tmp) {
    const _Math = Math;
    tmp = dismissedContents[Math.floor(Math, CHANNEL_NOTICE_INVITE / 8)] & 1 << CHANNEL_NOTICE_INVITE % 8;
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/Uint8ArrayUtils.tsx");

export { hasBit };
export const addBit = function addBit(dismissedContents, value) {
  const rounded = Math.floor(value / 8);
  let tmp2 = dismissedContents;
  if (dismissedContents.length <= rounded) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(rounded + 1);
    const result = uint8Array.set(dismissedContents, 0);
    tmp2 = uint8Array;
  }
  tmp2[rounded] = tmp2[rounded] | 1 << value % 8;
  return tmp2;
};
export const removeBit = function removeBit(dismissedContents, CHANNEL_NOTICE_INVITE) {
  if (hasBit(dismissedContents, CHANNEL_NOTICE_INVITE)) {
    const _Math = Math;
    const rounded = Math.floor(CHANNEL_NOTICE_INVITE / 8);
    dismissedContents[rounded] = dismissedContents[rounded] & ~1 << CHANNEL_NOTICE_INVITE % 8;
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
