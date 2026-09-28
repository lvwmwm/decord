// Module ID: 9183
// Function ID: 9184
// Name: useIsSecureFramesUIEnabled
// Dependencies: [2045, 4859, 9165, 504, 2]
// Exports: useIsSecureFramesUIEnabled

// Module 9183 (useIsSecureFramesUIEnabled)
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;

const require = fn;
let closure_4 = fn(9165).END_TO_END_ENCRYPTION_DISABLED;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [RTCConnectionStore, ChannelStore];
  const items1 = [channelId];
  return channelId(504).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, ChannelStore];
    [obj, obj2] = items;
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (obj.getChannelId() === tmp) {
        const channel = obj2.getChannel(tmp);
        flag = false;
        if (null != channel) {
          flag = false;
          if (!channel.isGuildStageVoice()) {
            const secureFramesState = obj.getSecureFramesState();
            let version;
            if (secureFramesState != null) {
              version = secureFramesState.version;
            }
            let tmp4 = null != version;
            if (tmp4) {
              tmp4 = version !== closure_4;
            }
            flag = tmp4;
          }
        }
      }
    }
    return flag;
  }, items1);
};
