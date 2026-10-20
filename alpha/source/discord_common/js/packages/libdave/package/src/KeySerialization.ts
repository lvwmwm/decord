// Module ID: 9127
// Function ID: 9128
// Name: KeySerialization
// Dependencies: [9128, 2]
// Exports: serializeKey

// Module 9127 (KeySerialization)
import _modDef9128 from "module_9128" /* 9128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9128;
  return obj.fromByteArray(uint8Array);
};
