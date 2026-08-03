// Module ID: 9076
// Function ID: 9077
// Name: serializeKey
// Dependencies: [9077, 2]
// Exports: serializeKey

// Module 9076 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9077).fromByteArray(uint8Array);
};
