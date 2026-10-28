// Module ID: 9227
// Function ID: 9228
// Name: KeySerialization
// Dependencies: [9228, 2]
// Exports: serializeKey

// Module 9227 (KeySerialization)
import _modDef9228 from "module_9228" /* 9228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9228;
  return obj.fromByteArray(uint8Array);
};
