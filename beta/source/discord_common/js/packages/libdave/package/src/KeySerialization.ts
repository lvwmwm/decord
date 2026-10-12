// Module ID: 8827
// Function ID: 8828
// Name: KeySerialization
// Dependencies: [8828, 2]
// Exports: serializeKey

// Module 8827 (KeySerialization)
import _modDef8828 from "module_8828" /* 8828 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef8828;
  return obj.fromByteArray(uint8Array);
};
