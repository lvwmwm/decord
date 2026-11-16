// Module ID: 1475
// Function ID: 1476
// Name: isBuffer
// Dependencies: []

// Module 1475 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
