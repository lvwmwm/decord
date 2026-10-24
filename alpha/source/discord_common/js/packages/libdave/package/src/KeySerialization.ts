// Module ID: 9194
// Function ID: 9195
// Name: KeySerialization
// Dependencies: [9195, 2]
// Exports: serializeKey

// Module 9194 (KeySerialization)
import _modDef9195 from "module_9195" /* 9195 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9195;
  return obj.fromByteArray(uint8Array);
};
