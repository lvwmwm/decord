// Module ID: 9052
// Function ID: 9053
// Name: KeySerialization
// Dependencies: [9053, 2]
// Exports: serializeKey

// Module 9052 (KeySerialization)
import _modDef9053 from "module_9053" /* 9053 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9053;
  return obj.fromByteArray(uint8Array);
};
