// Module ID: 8807
// Function ID: 8808
// Name: KeySerialization
// Dependencies: [8808, 2]
// Exports: serializeKey

// Module 8807 (KeySerialization)
import _modDef8808 from "module_8808" /* 8808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef8808;
  return obj.fromByteArray(uint8Array);
};
