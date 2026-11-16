// Module ID: 1740
// Function ID: 1741
// Dependencies: []
// Exports: toArrayBuffer

// Module 1740

export function toArrayBuffer(__getBytesResult) {
  const buffer = __getBytesResult.buffer;
  return buffer.slice(__getBytesResult.byteOffset, __getBytesResult.byteOffset + __getBytesResult.byteLength);
}
