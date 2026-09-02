// Module ID: 1422
// Function ID: 1423
// Name: isBuffer
// Dependencies: []

// Module 1422 (isBuffer)

export default function isBuffer(obj) {
  let tmp = obj;
  if (obj) {
    tmp = typeof obj === "object";
  }
  if (tmp) {
    tmp = typeof obj.copy === "function";
  }
  if (tmp) {
    tmp = typeof obj.fill === "function";
  }
  if (tmp) {
    tmp = typeof obj.readUInt8 === "function";
  }
  return tmp;
};
