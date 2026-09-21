// Module ID: 9946
// Function ID: 9947
// Name: KeySerialization
// Dependencies: [9947, 2]
// Exports: serializeKey

// Module 9946 (KeySerialization)
import _modDef9947 from "module_9947" /* 9947 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9947.fromByteArray(uint8Array);
};
