// Module ID: 6996
// Function ID: 55943
// Name: snowflakeSequence
// Dependencies: [21, 2]
// Exports: createNonce

// Module 6996 (snowflakeSequence)
let c2 = 0;
const snowflakeSequence = new require("DISCORD_EPOCH").SnowflakeSequence();
const result = require("set").fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  const timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  return importDefault(21).fromTimestampWithSequence(timestamp, snowflakeSequence);
};
