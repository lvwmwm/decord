// Module ID: 1741
// Function ID: 1742
// Dependencies: []
// Exports: toArrayBuffer

// Module 1741

export function toArrayBuffer(__getBytesResult) {
  const buffer = __getBytesResult.buffer;
  return buffer.slice(__getBytesResult.byteOffset, __getBytesResult.byteOffset + __getBytesResult.byteLength);
}
