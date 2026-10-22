// Module ID: 9163
// Function ID: 9164
// Name: KeySerialization
// Dependencies: [9164, 2]
// Exports: serializeKey

// Module 9163 (KeySerialization)
import _modDef9164 from "module_9164" /* 9164 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9164;
  return obj.fromByteArray(uint8Array);
};
