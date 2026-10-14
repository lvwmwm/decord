// Module ID: 1466
// Function ID: 1467
// Name: isBuffer
// Dependencies: []

// Module 1466 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
