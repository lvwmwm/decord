// Module ID: 10000
// Function ID: 10001
// Name: KeySerialization
// Dependencies: [10001, 2]
// Exports: serializeKey

// Module 10000 (KeySerialization)
import _modDef10001 from "module_10001" /* 10001 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef10001.fromByteArray(uint8Array);
};
