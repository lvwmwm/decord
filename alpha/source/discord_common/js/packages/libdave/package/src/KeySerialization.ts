// Module ID: 9360
// Function ID: 9361
// Name: KeySerialization
// Dependencies: [9361, 2]
// Exports: serializeKey

// Module 9360 (KeySerialization)
import _modDef9361 from "module_9361" /* 9361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9361.fromByteArray(uint8Array);
};
