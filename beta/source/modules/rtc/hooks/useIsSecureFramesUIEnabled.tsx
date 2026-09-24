// Module ID: 10000
// Function ID: 10001
// Name: useIsSecureFramesUIEnabled
// Dependencies: [2045, 4813, 9982, 558, 568, 504, 2]

// Module 10000 (useIsSecureFramesUIEnabled)
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4813 */;

const require = fn;
function isSecureFramesUIEnabled(isCallRTCConnectionEmpty, items) {
  [obj, obj2] = items;
  if (null == isCallRTCConnectionEmpty) {
    return false;
  } else if (obj.getChannelId() !== isCallRTCConnectionEmpty) {
    return false;
  } else {
    const channel = obj2.getChannel(isCallRTCConnectionEmpty);
    if (null != channel) {
      if (!channel.isGuildStageVoice()) {
        const secureFramesState = obj.getSecureFramesState();
        let version;
        if (secureFramesState != null) {
          version = secureFramesState.version;
        }
        let tmp3 = null != version;
        if (tmp3) {
          tmp3 = version !== closure_4;
        }
        return tmp3;
      }
    }
    return false;
  }
}
let closure_4 = fn(9982).END_TO_END_ENCRYPTION_DISABLED;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(4);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RTCConnectionStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      const items = [RTCConnectionStore, ChannelStore];
      return isSecureFramesUIEnabled(channelId, items);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = channelId(568);
  return channelId(504).useStateFromStores(first, tmp7, tmp8);
}) : ((channelId) => {
  channelId = channelId.channelId;
  let items = [RTCConnectionStore, ChannelStore];
  const items1 = [channelId];
  return channelId(504).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, ChannelStore];
    return isSecureFramesUIEnabled(channelId, items);
  }, items1);
});
