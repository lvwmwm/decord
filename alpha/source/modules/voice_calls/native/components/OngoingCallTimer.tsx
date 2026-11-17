// Module ID: 16141
// Function ID: 16142
// Name: OngoingCallTimer
// Dependencies: [19, 7031, 21, 504, 11, 16142, 2]
// Exports: default

// Module 16141 (OngoingCallTimer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import TimerDefault from "Timer" /* 16142 */;
import react from "react" /* 19 */;
import CallStore from "CallStore" /* 7031 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(channelId) {
  channelId = channelId.channelId;
  const style = channelId.style;
  const items = [CallStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = CallStore.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    const obj2 = SnowflakeUtilsDefault;
    timestamp = obj2.extractTimestamp(stateFromStores);
  }
  return jsx(TimerDefault, { style, timestamp });
};
