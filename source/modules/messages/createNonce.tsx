// Module ID: 7509
// Function ID: 7510
// Name: snowflakeSequence
// Dependencies: [11, 2]
// Exports: createNonce

// Module 7509 (snowflakeSequence)
import set from "set" /* 2 */;
import DISCORD_EPOCH from "DISCORD_EPOCH" /* 11 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;

let c2 = 0;
const snowflakeSequence = new DISCORD_EPOCH.SnowflakeSequence();
const result = set.fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  const timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  return DISCORD_EPOCHDefault.fromTimestampWithSequence(timestamp, snowflakeSequence);
};
