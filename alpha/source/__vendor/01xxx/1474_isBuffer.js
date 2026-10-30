// Module ID: 1474
// Function ID: 1475
// Name: isBuffer
// Dependencies: []

// Module 1474 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
