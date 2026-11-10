// Module ID: 9349
// Function ID: 9350
// Name: KeySerialization
// Dependencies: [9350, 2]
// Exports: serializeKey

// Module 9349 (KeySerialization)
import _modDef9350 from "module_9350" /* 9350 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9350;
  return obj.fromByteArray(uint8Array);
}
