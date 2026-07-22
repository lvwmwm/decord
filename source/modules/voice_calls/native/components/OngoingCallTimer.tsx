// Module ID: 12612
// Function ID: 96926
// Name: OnGoingCallTimer
// Dependencies: []
// Exports: default

// Module 12612 (OnGoingCallTimer)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = call.getCall(channelId);
    let messageId;
    if (null != call) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let num = 0;
  if (null != stateFromStores) {
    num = importDefault(dependencyMap[4]).extractTimestamp(stateFromStores);
    const obj2 = importDefault(dependencyMap[4]);
  }
  obj = { style: channelId.style, timestamp: num };
  return jsx(importDefault(dependencyMap[5]), obj);
};
