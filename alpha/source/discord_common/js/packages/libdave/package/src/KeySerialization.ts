// Module ID: 9154
// Function ID: 9155
// Name: KeySerialization
// Dependencies: [9155, 2]
// Exports: serializeKey

// Module 9154 (KeySerialization)
import _modDef9155 from "module_9155" /* 9155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9155;
  return obj.fromByteArray(uint8Array);
};
