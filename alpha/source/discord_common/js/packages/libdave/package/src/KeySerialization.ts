// Module ID: 8636
// Function ID: 8637
// Name: KeySerialization
// Dependencies: [8637, 2]
// Exports: serializeKey

// Module 8636 (KeySerialization)
import _modDef8637 from "module_8637" /* 8637 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef8637;
  return obj.fromByteArray(uint8Array);
}
