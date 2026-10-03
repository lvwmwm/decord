// Module ID: 9362
// Function ID: 9363
// Name: KeySerialization
// Dependencies: [9363, 2]
// Exports: serializeKey

// Module 9362 (KeySerialization)
import _modDef9363 from "module_9363" /* 9363 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9363;
  return obj.fromByteArray(uint8Array);
};
