// Module ID: 8890
// Function ID: 8891
// Name: serializeKey
// Dependencies: [8891, 2]
// Exports: serializeKey

// Module 8890 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8891).fromByteArray(uint8Array);
};
