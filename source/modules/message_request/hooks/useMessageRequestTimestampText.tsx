// Module ID: 15433
// Function ID: 117761
// Name: getMessageTimestampForChannel
// Dependencies: []
// Exports: useMessageRequestRelativeTimestampText, useMessageRequestTimestampText

// Module 15433 (getMessageTimestampForChannel)
function getMessageTimestampForChannel(loaded) {
  let lastMessageId;
  let message;
  ({ lastMessageId, message } = loaded);
  if (loaded.loaded) {
    if (null != message) {
      let extractTimestampResult = importDefault(dependencyMap[1]).extractTimestamp(message.id);
      const obj2 = importDefault(dependencyMap[1]);
    }
    return extractTimestampResult;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = importDefault(dependencyMap[1]).extractTimestamp(lastMessageId);
    const obj = importDefault(dependencyMap[1]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  const arg1 = channel;
  let obj = arg1(dependencyMap[2]);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = {};
  const items = [closure_3];
  obj.lastMessageId = arg1(dependencyMap[3]).useStateFromStores(items, () => closure_3.lastMessageId(arg0.id));
  const merged = Object.assign(messageRequestPreview);
  const tmp3 = getMessageTimestampForChannel(obj);
  let str = "";
  if (null != tmp3) {
    str = importDefault(dependencyMap[4])(tmp3).calendar();
    const obj4 = importDefault(dependencyMap[4])(tmp3);
  }
  return str;
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  const arg1 = channel;
  let obj = arg1(dependencyMap[2]);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = {};
  const items = [closure_3];
  obj.lastMessageId = arg1(dependencyMap[3]).useStateFromStores(items, () => closure_3.lastMessageId(arg0.id));
  const merged = Object.assign(messageRequestPreview);
  const tmp3 = getMessageTimestampForChannel(obj);
  let str = "";
  if (null != tmp3) {
    str = arg1(dependencyMap[5]).getTimestampString(tmp3);
    const obj4 = arg1(dependencyMap[5]);
  }
  return str;
};
