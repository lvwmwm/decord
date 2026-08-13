// Module ID: 9257
// Function ID: 9258
// Name: serializeKey
// Dependencies: [9258, 2]
// Exports: serializeKey

// Module 9257 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9258).fromByteArray(uint8Array);
};
