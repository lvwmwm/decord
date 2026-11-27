// Module ID: 8679
// Function ID: 8680
// Name: KeySerialization
// Dependencies: [8680, 2]
// Exports: serializeKey

// Module 8679 (KeySerialization)
import _modDef8680 from "module_8680" /* 8680 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef8680;
  return obj.fromByteArray(uint8Array);
}
