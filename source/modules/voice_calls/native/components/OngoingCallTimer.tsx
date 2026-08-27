// Module ID: 13365
// Function ID: 13366
// Name: OnGoingCallTimer
// Dependencies: [19, 5174, 21, 589, 11, 13366, 2]
// Exports: default

// Module 13365 (OnGoingCallTimer)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import noopAll from "noop" /* 19 */;
import componentDidMountDefault from "componentDidMount" /* 13366 */;
import closure_3 from "callConnect" /* 5174 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(style) {
  const channelId = style.channelId;
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const call = closure_1_3.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    timestamp = DISCORD_EPOCHDefault.extractTimestamp(stateFromStores);
    const obj2 = DISCORD_EPOCHDefault;
  }
  return jsx(componentDidMountDefault, { style: style.style, timestamp });
};
