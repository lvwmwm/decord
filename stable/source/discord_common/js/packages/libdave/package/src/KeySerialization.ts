// Module ID: 9226
// Function ID: 9227
// Name: KeySerialization
// Dependencies: [9227, 2]
// Exports: serializeKey

// Module 9226 (KeySerialization)
import _modDef9227 from "module_9227" /* 9227 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9227;
  return obj.fromByteArray(uint8Array);
};
