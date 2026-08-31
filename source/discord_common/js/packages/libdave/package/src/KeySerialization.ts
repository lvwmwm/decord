// Module ID: 9798
// Function ID: 9799
// Name: serializeKey
// Dependencies: [9799, 2]
// Exports: serializeKey

// Module 9798 (serializeKey)
import set from "set" /* 2 */;
import byteLengthDefault from "byteLength" /* 9799 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};
