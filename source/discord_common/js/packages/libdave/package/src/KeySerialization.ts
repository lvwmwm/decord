// Module ID: 8895
// Function ID: 70161
// Name: serializeKey
// Dependencies: [8896, 2]
// Exports: serializeKey

// Module 8895 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8896).fromByteArray(uint8Array);
};
