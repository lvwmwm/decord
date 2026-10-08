// Module ID: 8819
// Function ID: 8820
// Name: useIsSecureFramesUIEnabled
// Dependencies: [2063, 5108, 8801, 558, 576, 504, 2]

// Module 8819 (useIsSecureFramesUIEnabled)
import SecureFramesConstants from "SecureFramesConstants" /* 8801 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let version;

function isSecureFramesUIEnabled(isCallRTCConnectionEmpty, items) {
  let obj;
  let obj2;
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
        version = undefined;
        if (secureFramesState != null) {
          version = secureFramesState.version;
        }
        return null != version && version !== closure_4;
      }
    }
    return false;
  }
}
let closure_4 = SecureFramesConstants.END_TO_END_ENCRYPTION_DISABLED;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSecureFramesUIEnabled(channelId) {
  let first;
  let tmp7;
  let tmp8;
  const obj = channelId(576);
  const cResult = obj.c(4);
  const tmp = channelId;
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RTCConnectionStore, ChannelStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [RTCConnectionStore, ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  return obj.useStateFromStores(items, () => {
    const items = [RTCConnectionStore, ChannelStore];
    return isSecureFramesUIEnabled(channelId, items);
  }, items1);
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = tmp2;
