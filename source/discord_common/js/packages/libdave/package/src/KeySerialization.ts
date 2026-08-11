// Module ID: 9213
// Function ID: 9214
// Name: serializeKey
// Dependencies: [9214, 2]
// Exports: serializeKey

// Module 9213 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9214).fromByteArray(uint8Array);
};
