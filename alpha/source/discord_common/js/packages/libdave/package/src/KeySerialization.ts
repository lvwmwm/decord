// Module ID: 8826
// Function ID: 8827
// Name: KeySerialization
// Dependencies: [8827, 2]
// Exports: serializeKey

// Module 8826 (KeySerialization)
import _modDef8827 from "module_8827" /* 8827 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef8827;
  return obj.fromByteArray(uint8Array);
};
