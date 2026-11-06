// Module ID: 9361
// Function ID: 9362
// Name: KeySerialization
// Dependencies: [9362, 2]
// Exports: serializeKey

// Module 9361 (KeySerialization)
import _modDef9362 from "module_9362" /* 9362 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9362;
  return obj.fromByteArray(uint8Array);
}
