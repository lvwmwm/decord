// Module ID: 8797
// Function ID: 8798
// Name: isItemUnreadInChannel
// Dependencies: [6750, 11, 2]
// Exports: isItemUnreadInChannel

// Module 8797 (isItemUnreadInChannel)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ReadStateStore from "ReadStateStore" /* 6750 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/isItemUnreadInChannel.tsx");

export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(message_id);
    const obj2 = SnowflakeUtilsDefault;
    tmp2 = extractTimestampResult > obj2.extractTimestamp(trackedAckMessageId);
  }
  return tmp2;
};
