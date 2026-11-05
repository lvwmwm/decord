// Module ID: 9415
// Function ID: 9416
// Name: KeySerialization
// Dependencies: [9416, 2]
// Exports: serializeKey

// Module 9415 (KeySerialization)
import _modDef9416 from "module_9416" /* 9416 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9416;
  return obj.fromByteArray(uint8Array);
}
