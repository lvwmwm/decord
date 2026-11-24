// Module ID: 8537
// Function ID: 8538
// Name: KeySerialization
// Dependencies: [8538, 2]
// Exports: serializeKey

// Module 8537 (KeySerialization)
import _modDef8538 from "module_8538" /* 8538 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef8538;
  return obj.fromByteArray(uint8Array);
}
