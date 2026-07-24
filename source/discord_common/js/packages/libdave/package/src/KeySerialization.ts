// Module ID: 8934
// Function ID: 70376
// Name: serializeKey
// Dependencies: [8935, 2]
// Exports: serializeKey

// Module 8934 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8935).fromByteArray(uint8Array);
};
