// Module ID: 10556
// Function ID: 10557
// Name: KeySerialization
// Dependencies: [10557, 2]
// Exports: serializeKey

// Module 10556 (KeySerialization)
import _modDef10557 from "module_10557" /* 10557 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef10557;
  return obj.fromByteArray(uint8Array);
}
