// Module ID: 9244
// Function ID: 9245
// Name: KeySerialization
// Dependencies: [9245, 2]
// Exports: serializeKey

// Module 9244 (KeySerialization)
import _modDef9245 from "module_9245" /* 9245 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9245;
  return obj.fromByteArray(uint8Array);
}
