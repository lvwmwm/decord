// Module ID: 8798
// Function ID: 8799
// Name: KeySerialization
// Dependencies: [8799, 2]
// Exports: serializeKey

// Module 8798 (KeySerialization)
import _modDef8799 from "module_8799" /* 8799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef8799;
  return obj.fromByteArray(uint8Array);
};
