// Module ID: 10625
// Function ID: 10626
// Name: KeySerialization
// Dependencies: [10626, 2]
// Exports: serializeKey

// Module 10625 (KeySerialization)
import _modDef10626 from "module_10626" /* 10626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef10626;
  return obj.fromByteArray(uint8Array);
}
