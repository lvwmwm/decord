// Module ID: 9837
// Function ID: 9838
// Name: serializeKey
// Dependencies: [9838, 2]
// Exports: serializeKey

// Module 9837 (serializeKey)
import set from "set" /* 2 */;
import byteLengthDefault from "byteLength" /* 9838 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};
