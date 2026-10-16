// Module ID: 10041
// Function ID: 10042
// Name: createNonce
// Dependencies: [11, 2]
// Exports: createNonce

// Module 10041 (createNonce)
import SnowflakeUtils from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const SnowflakeUtilsDefault = SnowflakeUtils;

let timestamp = 0;
const snowflakeSequence = new SnowflakeUtils.SnowflakeSequence();
const result = size.fileFinishedImporting("modules/messages/createNonce.tsx");

export const createNonce = function createNonce() {
  timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  const obj = SnowflakeUtilsDefault;
  return obj.fromTimestampWithSequence(timestamp, snowflakeSequence);
};
