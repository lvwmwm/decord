// Module ID: 9253
// Function ID: 9254
// Name: serializeKey
// Dependencies: [9254, 2]
// Exports: serializeKey

// Module 9253 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9254).fromByteArray(uint8Array);
};
