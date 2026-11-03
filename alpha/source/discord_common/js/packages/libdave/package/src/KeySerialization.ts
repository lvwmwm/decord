// Module ID: 9391
// Function ID: 9392
// Name: KeySerialization
// Dependencies: [9392, 2]
// Exports: serializeKey

// Module 9391 (KeySerialization)
import _modDef9392 from "module_9392" /* 9392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9392;
  return obj.fromByteArray(uint8Array);
}
