// Module ID: 9968
// Function ID: 9969
// Name: KeySerialization
// Dependencies: [9969, 2]
// Exports: serializeKey

// Module 9968 (KeySerialization)
import _modDef9969 from "module_9969" /* 9969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9969.fromByteArray(uint8Array);
};
