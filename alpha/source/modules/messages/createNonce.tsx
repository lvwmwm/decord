// Module ID: 8785
// Function ID: 8786
// Name: createNonce
// Dependencies: [11, 2]
// Exports: createNonce

// Module 8785 (createNonce)
import SnowflakeUtils from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const SnowflakeUtilsDefault = SnowflakeUtils;

let timestamp = 0;
const snowflakeSequence = new SnowflakeUtils.SnowflakeSequence();
const result = size.fileFinishedImporting("modules/messages/createNonce.tsx");

export function createNonce() {
  timestamp = Date.now();
  if (timestamp !== timestamp) {
    snowflakeSequence.reset();
  }
  const obj = SnowflakeUtilsDefault;
  return obj.fromTimestampWithSequence(timestamp, snowflakeSequence);
}
