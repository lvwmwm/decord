// Module ID: 1477
// Function ID: 1478
// Name: isBuffer
// Dependencies: []

// Module 1477 (isBuffer)

export default function isBuffer(copy) {
  return copy && typeof copy === "object" && typeof copy.copy === "function" && typeof copy.fill === "function" && typeof copy.readUInt8 === "function";
};
