// Module ID: 9263
// Function ID: 9264
// Name: KeySerialization
// Dependencies: [9264, 2]
// Exports: serializeKey

// Module 9263 (KeySerialization)
import _modDef9264 from "module_9264" /* 9264 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9264;
  return obj.fromByteArray(uint8Array);
}
