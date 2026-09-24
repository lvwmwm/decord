// Module ID: 9978
// Function ID: 9979
// Name: KeySerialization
// Dependencies: [9979, 2]
// Exports: serializeKey

// Module 9978 (KeySerialization)
import _modDef9979 from "module_9979" /* 9979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9979.fromByteArray(uint8Array);
};
