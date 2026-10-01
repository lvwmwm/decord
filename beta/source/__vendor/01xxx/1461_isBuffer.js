// Module ID: 1461
// Function ID: 1462
// Name: isBuffer
// Dependencies: []

// Module 1461 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
