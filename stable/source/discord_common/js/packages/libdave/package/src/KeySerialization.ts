// Module ID: 9277
// Function ID: 9278
// Name: KeySerialization
// Dependencies: [9278, 2]
// Exports: serializeKey

// Module 9277 (KeySerialization)
import _modDef9278 from "module_9278" /* 9278 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9278.fromByteArray(uint8Array);
};
