// Module ID: 7253
// Function ID: 7254
// Name: snowflakeSequence
// Dependencies: [11, 2]
// Exports: createNonce

// Module 7253 (snowflakeSequence)
let c2 = 0;
const snowflakeSequence = new require("DISCORD_EPOCH").SnowflakeSequence();
const result = require("set").fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  const timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  return importDefault(11).fromTimestampWithSequence(timestamp, snowflakeSequence);
};
