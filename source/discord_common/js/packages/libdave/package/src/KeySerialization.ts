// Module ID: 9706
// Function ID: 9707
// Name: serializeKey
// Dependencies: [9707, 2]
// Exports: serializeKey

// Module 9706 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9707).fromByteArray(uint8Array);
};
