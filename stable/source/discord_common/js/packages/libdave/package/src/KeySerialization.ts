// Module ID: 9138
// Function ID: 9139
// Name: KeySerialization
// Dependencies: [9139, 2]
// Exports: serializeKey

// Module 9138 (KeySerialization)
import _modDef9139 from "module_9139" /* 9139 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  const obj = _modDef9139;
  return obj.fromByteArray(uint8Array);
};
