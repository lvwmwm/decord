// Module ID: 9101
// Function ID: 9102
// Name: serializeKey
// Dependencies: [9102, 2]
// Exports: serializeKey

// Module 9101 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9102).fromByteArray(uint8Array);
};
