// Module ID: 1473
// Function ID: 1474
// Name: isBuffer
// Dependencies: []

// Module 1473 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
