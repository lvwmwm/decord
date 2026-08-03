// Module ID: 12936
// Function ID: 12937
// Name: OnGoingCallTimer
// Dependencies: [19, 4932, 21, 589, 11, 12937, 2]
// Exports: default

// Module 12936 (OnGoingCallTimer)
import "noop";
import callConnect from "callConnect";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(style) {
  const channelId = style.channelId;
  const items = [callConnect];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const call = outer1_3.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    timestamp = importDefault(11).extractTimestamp(stateFromStores);
    const obj2 = importDefault(11);
  }
  return jsx(importDefault(12937), { style: style.style, timestamp });
};
