// Module ID: 9231
// Function ID: 9232
// Name: KeySerialization
// Dependencies: [9232, 2]
// Exports: serializeKey

// Module 9231 (KeySerialization)
import _modDef9232 from "module_9232" /* 9232 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9232;
  return obj.fromByteArray(uint8Array);
}
