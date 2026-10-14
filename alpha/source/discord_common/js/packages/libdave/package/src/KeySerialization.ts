// Module ID: 8831
// Function ID: 8832
// Name: KeySerialization
// Dependencies: [8832, 2]
// Exports: serializeKey

// Module 8831 (KeySerialization)
import _modDef8832 from "module_8832" /* 8832 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef8832;
  return obj.fromByteArray(uint8Array);
};
