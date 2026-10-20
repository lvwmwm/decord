// Module ID: 9115
// Function ID: 9116
// Name: KeySerialization
// Dependencies: [9116, 2]
// Exports: serializeKey

// Module 9115 (KeySerialization)
import _modDef9116 from "module_9116" /* 9116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9116;
  return obj.fromByteArray(uint8Array);
};
