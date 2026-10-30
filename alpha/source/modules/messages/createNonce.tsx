// Module ID: 10295
// Function ID: 10296
// Name: createNonce
// Dependencies: [11, 2]
// Exports: createNonce

// Module 10295 (createNonce)
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
