// Module ID: 9053
// Function ID: 9054
// Name: KeySerialization
// Dependencies: [9054, 2]
// Exports: serializeKey

// Module 9053 (KeySerialization)
import _modDef9054 from "module_9054" /* 9054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9054;
  return obj.fromByteArray(uint8Array);
};
