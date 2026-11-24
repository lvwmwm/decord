// Module ID: 9705
// Function ID: 9706
// Name: KeySerialization
// Dependencies: [9706, 2]
// Exports: serializeKey

// Module 9705 (KeySerialization)
import _modDef9706 from "module_9706" /* 9706 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  const obj = _modDef9706;
  return obj.fromByteArray(uint8Array);
}
