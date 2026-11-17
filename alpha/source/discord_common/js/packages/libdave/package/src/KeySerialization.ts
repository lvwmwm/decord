// Module ID: 10325
// Function ID: 10326
// Name: KeySerialization
// Dependencies: [10326, 2]
// Exports: serializeKey

// Module 10325 (KeySerialization)
import _modDef10326 from "module_10326" /* 10326 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef10326;
  return obj.fromByteArray(uint8Array);
}
