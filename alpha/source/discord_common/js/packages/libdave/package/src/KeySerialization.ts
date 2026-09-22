// Module ID: 9974
// Function ID: 9975
// Name: KeySerialization
// Dependencies: [9975, 2]
// Exports: serializeKey

// Module 9974 (KeySerialization)
import _modDef9975 from "module_9975" /* 9975 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9975.fromByteArray(uint8Array);
};
