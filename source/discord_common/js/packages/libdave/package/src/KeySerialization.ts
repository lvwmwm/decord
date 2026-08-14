// Module ID: 9271
// Function ID: 9272
// Name: serializeKey
// Dependencies: [9272, 2]
// Exports: serializeKey

// Module 9271 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9272).fromByteArray(uint8Array);
};
