// Module ID: 9077
// Function ID: 9078
// Name: serializeKey
// Dependencies: [9078, 2]
// Exports: serializeKey

// Module 9077 (serializeKey)
import set from "set" /* 2 */;
import byteLengthDefault from "byteLength" /* 9078 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};
