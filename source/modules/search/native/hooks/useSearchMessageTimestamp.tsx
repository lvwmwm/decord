// Module ID: 15240
// Function ID: 115075
// Name: useSearchMessageTimestamp
// Dependencies: []
// Exports: useSearchMessageTimestamp

// Module 15240 (useSearchMessageTimestamp)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  channel = message;
  const importDefault = channel;
  const items = [message, channel];
  return React.useMemo(() => {
    let obj = arg1(closure_2[1]);
    let id = arg0.id;
    if (null == id) {
      id = arg1.id;
    }
    const extractTimestampResult = obj.extractTimestamp(id);
    obj = { timestamp: arg0(closure_2[2]).getRelativeTimestamp(extractTimestampResult, true) };
    const obj3 = arg0(closure_2[2]);
    obj.timestampAccessibilityLabel = arg0(closure_2[2]).getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};
