// Module ID: 9013
// Function ID: 9014
// Name: isItemUnreadInChannel
// Dependencies: [6922, 11, 2]
// Exports: isItemUnreadInChannel

// Module 9013 (isItemUnreadInChannel)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ReadStateStore from "ReadStateStore" /* 6922 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/isItemUnreadInChannel.tsx");

export function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(message_id);
    const obj2 = SnowflakeUtilsDefault;
    tmp2 = extractTimestampResult > obj2.extractTimestamp(trackedAckMessageId);
  }
  return tmp2;
}
