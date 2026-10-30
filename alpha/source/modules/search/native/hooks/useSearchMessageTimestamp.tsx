// Module ID: 18690
// Function ID: 18691
// Name: useSearchMessageTimestamp
// Dependencies: [19, 11, 6854, 2]
// Exports: useSearchMessageTimestamp

// Module 18690 (useSearchMessageTimestamp)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 6854 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export function useSearchMessageTimestamp(message, channel) {
  const items = [message, channel];
  return react.useMemo(() => {
    let obj2;
    let obj3;
    let id = message.id;
    const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
    SnowflakeUtilsDefault;
    if (id == null) {
      id = channel.id;
    }
    const extractTimestampResult = extractTimestamp(id);
    const obj = { timestamp: obj2.getRelativeTimestamp(extractTimestampResult, true), timestampAccessibilityLabel: obj3.getRelativeTimestamp(extractTimestampResult, false) };
    obj2 = NotificationCenterUtils;
    obj3 = NotificationCenterUtils;
    return obj;
  }, items);
}
