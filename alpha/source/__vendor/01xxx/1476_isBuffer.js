// Module ID: 1476
// Function ID: 1477
// Name: isBuffer
// Dependencies: []

// Module 1476 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
