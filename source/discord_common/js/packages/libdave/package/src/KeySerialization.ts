// Module ID: 8886
// Function ID: 8887
// Name: serializeKey
// Dependencies: [8887, 2]
// Exports: serializeKey

// Module 8886 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8887).fromByteArray(uint8Array);
};
