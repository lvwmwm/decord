// Module ID: 9343
// Function ID: 9344
// Name: KeySerialization
// Dependencies: [9344, 2]
// Exports: serializeKey

// Module 9343 (KeySerialization)
import _modDef9344 from "module_9344" /* 9344 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9344;
  return obj.fromByteArray(uint8Array);
}
