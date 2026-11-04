// Module ID: 9408
// Function ID: 9409
// Name: KeySerialization
// Dependencies: [9409, 2]
// Exports: serializeKey

// Module 9408 (KeySerialization)
import _modDef9409 from "module_9409" /* 9409 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9409;
  return obj.fromByteArray(uint8Array);
}
