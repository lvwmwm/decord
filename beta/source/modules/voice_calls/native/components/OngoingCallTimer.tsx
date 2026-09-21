// Module ID: 14068
// Function ID: 14069
// Name: OngoingCallTimer
// Dependencies: [19, 5497, 21, 558, 568, 504, 11, 14069, 2]

// Module 14068 (OngoingCallTimer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import TimerDefault from "Timer" /* 14069 */;
import noop from "module_19" /* 19 */;
import CallStore from "CallStore" /* 5497 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channelId(568).c(9);
  ({ style, channelId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      const call = CallStore.getCall(channelId);
      let messageId;
      if (call != null) {
        messageId = call.messageId;
      }
      return messageId;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    let num5 = 0;
    if (null != stateFromStores) {
      num5 = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
    }
    cResult[4] = stateFromStores;
    cResult[5] = num5;
    let tmp9 = num5;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === style) {
      let tmp12 = cResult[8];
    }
    return tmp12;
  }
  const tmp13 = jsx(TimerDefault, { style, timestamp: tmp9 });
  cResult[6] = tmp9;
  cResult[7] = style;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((style) => {
  const channelId = style.channelId;
  const items = [CallStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const call = CallStore.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    timestamp = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  return jsx(TimerDefault, { style: style.style, timestamp });
});
