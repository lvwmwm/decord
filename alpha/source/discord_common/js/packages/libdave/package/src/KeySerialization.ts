// Module ID: 9585
// Function ID: 9586
// Name: KeySerialization
// Dependencies: [9586, 2]
// Exports: serializeKey

// Module 9585 (KeySerialization)
import _modDef9586 from "module_9586" /* 9586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9586;
  return obj.fromByteArray(uint8Array);
}
