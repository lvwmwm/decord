// Module ID: 6990
// Function ID: 55886
// Name: snowflakeSequence
// Dependencies: []
// Exports: createNonce

// Module 6990 (snowflakeSequence)
let closure_2 = 0;
const snowflakeSequence = new require(dependencyMap[0]).SnowflakeSequence();
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  const timestamp = Date.now();
  if (closure_2 !== timestamp) {
    snowflakeSequence.reset();
    closure_2 = timestamp;
  }
  return importDefault(dependencyMap[0]).fromTimestampWithSequence(timestamp, snowflakeSequence);
};
