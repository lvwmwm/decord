// Module ID: 8888
// Function ID: 70120
// Name: serializeKey
// Dependencies: []
// Exports: serializeKey

// Module 8888 (serializeKey)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(dependencyMap[0]).fromByteArray(uint8Array);
};
