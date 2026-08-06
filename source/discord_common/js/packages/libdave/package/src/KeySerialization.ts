// Module ID: 9130
// Function ID: 9131
// Name: serializeKey
// Dependencies: [9131, 2]
// Exports: serializeKey

// Module 9130 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9131).fromByteArray(uint8Array);
};
