// Module ID: 9099
// Function ID: 9100
// Name: KeySerialization
// Dependencies: [9100, 2]
// Exports: serializeKey

// Module 9099 (KeySerialization)
import _modDef9100 from "module_9100" /* 9100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9100;
  return obj.fromByteArray(uint8Array);
};
