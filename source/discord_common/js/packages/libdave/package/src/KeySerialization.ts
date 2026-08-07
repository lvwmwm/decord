// Module ID: 9147
// Function ID: 9148
// Name: serializeKey
// Dependencies: [9148, 2]
// Exports: serializeKey

// Module 9147 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9148).fromByteArray(uint8Array);
};
