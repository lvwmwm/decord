// Module ID: 9170
// Function ID: 9171
// Name: KeySerialization
// Dependencies: [9171, 2]
// Exports: serializeKey

// Module 9170 (KeySerialization)
import _modDef9171 from "module_9171" /* 9171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9171;
  return obj.fromByteArray(uint8Array);
};
