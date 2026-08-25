// Module ID: 9355
// Function ID: 9356
// Name: serializeKey
// Dependencies: [9356, 2]
// Exports: serializeKey

// Module 9355 (serializeKey)
import set from "set" /* 2 */;
import byteLengthDefault from "byteLength" /* 9356 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};
