// Module ID: 9129
// Function ID: 9130
// Name: serializeKey
// Dependencies: [9130, 2]
// Exports: serializeKey

// Module 9129 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9130).fromByteArray(uint8Array);
};
