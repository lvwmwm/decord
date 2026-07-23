// Module ID: 1384
// Function ID: 16538
// Name: isBuffer
// Dependencies: []

// Module 1384 (isBuffer)

export default function isBuffer(copy) {
  let tmp = copy;
  if (copy) {
    tmp = "object" === typeof copy;
  }
  if (tmp) {
    tmp = "function" === typeof copy.copy;
  }
  if (tmp) {
    tmp = "function" === typeof copy.fill;
  }
  if (tmp) {
    tmp = "function" === typeof copy.readUInt8;
  }
  return tmp;
};
