// Module ID: 8899
// Function ID: 8900
// Name: serializeKey
// Dependencies: [8900, 2]
// Exports: serializeKey

// Module 8899 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8900).fromByteArray(uint8Array);
};
