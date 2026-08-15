// Module ID: 7501
// Function ID: 7502
// Name: snowflakeSequence
// Dependencies: [11, 2]
// Exports: createNonce

// Module 7501 (snowflakeSequence)
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
