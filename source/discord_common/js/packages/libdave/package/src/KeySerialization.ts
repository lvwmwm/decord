// Module ID: 9207
// Function ID: 9208
// Name: serializeKey
// Dependencies: [9208, 2]
// Exports: serializeKey

// Module 9207 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9208).fromByteArray(uint8Array);
};
