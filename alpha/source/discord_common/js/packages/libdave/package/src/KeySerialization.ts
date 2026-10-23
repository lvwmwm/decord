// Module ID: 9193
// Function ID: 9194
// Name: KeySerialization
// Dependencies: [9194, 2]
// Exports: serializeKey

// Module 9193 (KeySerialization)
import _modDef9194 from "module_9194" /* 9194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9194;
  return obj.fromByteArray(uint8Array);
};
