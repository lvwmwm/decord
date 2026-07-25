// Module ID: 8822
// Function ID: 69855
// Name: serializeKey
// Dependencies: [8823, 2]
// Exports: serializeKey

// Module 8822 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8823).fromByteArray(uint8Array);
};
