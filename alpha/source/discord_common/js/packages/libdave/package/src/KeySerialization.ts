// Module ID: 8678
// Function ID: 8679
// Name: KeySerialization
// Dependencies: [8679, 2]
// Exports: serializeKey

// Module 8678 (KeySerialization)
import _modDef8679 from "module_8679" /* 8679 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef8679;
  return obj.fromByteArray(uint8Array);
}
