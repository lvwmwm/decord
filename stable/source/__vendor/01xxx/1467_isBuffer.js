// Module ID: 1467
// Function ID: 1468
// Name: isBuffer
// Dependencies: []

// Module 1467 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
