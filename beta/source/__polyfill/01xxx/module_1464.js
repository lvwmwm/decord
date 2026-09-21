// Module ID: 1464
// Function ID: 1465
// Dependencies: []

// Module 1464

export default function isBuffer(copy) {
  let tmp = copy;
  if (copy) {
    tmp = typeof copy === "object";
  }
  if (tmp) {
    tmp = typeof copy.copy === "function";
  }
  if (tmp) {
    tmp = typeof copy.fill === "function";
  }
  if (tmp) {
    tmp = typeof copy.readUInt8 === "function";
  }
  return tmp;
};
