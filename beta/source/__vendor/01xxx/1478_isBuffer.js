// Module ID: 1478
// Function ID: 1479
// Name: isBuffer
// Dependencies: []

// Module 1478 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
