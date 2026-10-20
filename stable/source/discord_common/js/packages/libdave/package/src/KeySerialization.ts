// Module ID: 8822
// Function ID: 8823
// Name: KeySerialization
// Dependencies: [8823, 2]
// Exports: serializeKey

// Module 8822 (KeySerialization)
import _modDef8823 from "module_8823" /* 8823 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef8823;
  return obj.fromByteArray(uint8Array);
};
