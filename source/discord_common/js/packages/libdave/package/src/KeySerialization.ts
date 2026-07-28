// Module ID: 8866
// Function ID: 70007
// Name: serializeKey
// Dependencies: [8867, 2]
// Exports: serializeKey

// Module 8866 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8867).fromByteArray(uint8Array);
};
