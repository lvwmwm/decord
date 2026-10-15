// Module ID: 9044
// Function ID: 9045
// Name: KeySerialization
// Dependencies: [9045, 2]
// Exports: serializeKey

// Module 9044 (KeySerialization)
import _modDef9045 from "module_9045" /* 9045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9045;
  return obj.fromByteArray(uint8Array);
};
