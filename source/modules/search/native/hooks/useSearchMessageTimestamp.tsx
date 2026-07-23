// Module ID: 15364
// Function ID: 117288
// Name: useSearchMessageTimestamp
// Dependencies: [31, 21, 6884, 2]
// Exports: useSearchMessageTimestamp

// Module 15364 (useSearchMessageTimestamp)
import result from "result";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  let closure_0 = message;
  let closure_1 = channel;
  const items = [message, channel];
  return React.useMemo(() => {
    let obj = channel(outer1_2[1]);
    let id = message.id;
    if (null == id) {
      id = channel.id;
    }
    const extractTimestampResult = obj.extractTimestamp(id);
    obj = { timestamp: message(outer1_2[2]).getRelativeTimestamp(extractTimestampResult, true) };
    const obj3 = message(outer1_2[2]);
    obj.timestampAccessibilityLabel = message(outer1_2[2]).getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};
