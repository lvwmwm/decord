// Module ID: 1479
// Function ID: 1480
// Name: isBuffer
// Dependencies: []

// Module 1479 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
