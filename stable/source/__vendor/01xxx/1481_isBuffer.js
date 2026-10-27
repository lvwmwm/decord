// Module ID: 1481
// Function ID: 1482
// Name: isBuffer
// Dependencies: []

// Module 1481 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
