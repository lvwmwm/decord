// Module ID: 9606
// Function ID: 9607
// Name: KeySerialization
// Dependencies: [9607, 2]
// Exports: serializeKey

// Module 9606 (KeySerialization)
import _modDef9607 from "module_9607" /* 9607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9607;
  return obj.fromByteArray(uint8Array);
}
