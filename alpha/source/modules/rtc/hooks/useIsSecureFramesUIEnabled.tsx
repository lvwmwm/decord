// Module ID: 10069
// Function ID: 10070
// Name: useIsSecureFramesUIEnabled
// Dependencies: [2042, 4850, 10051, 504, 2]
// Exports: useIsSecureFramesUIEnabled

// Module 10069 (useIsSecureFramesUIEnabled)
import ChannelStore from "ChannelStore" /* 2042 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4850 */;

const require = fn;
let closure_4 = fn(10051).END_TO_END_ENCRYPTION_DISABLED;
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
