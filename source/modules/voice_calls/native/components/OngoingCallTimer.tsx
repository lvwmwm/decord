// Module ID: 12777
// Function ID: 99403
// Name: OnGoingCallTimer
// Dependencies: [31, 4809, 33, 566, 21, 12778, 2]
// Exports: default

// Module 12777 (OnGoingCallTimer)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = outer1_3.getCall(channelId);
    let messageId;
    if (null != call) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let num = 0;
  if (null != stateFromStores) {
    num = importDefault(21).extractTimestamp(stateFromStores);
    const obj2 = importDefault(21);
  }
  obj = { style: channelId.style, timestamp: num };
  return jsx(importDefault(12778), { style: channelId.style, timestamp: num });
};
