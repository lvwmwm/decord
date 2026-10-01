// Module ID: 9183
// Function ID: 9184
// Name: useIsSecureFramesUIEnabled
// Dependencies: [2045, 4859, 9165, 504, 2]
// Exports: useIsSecureFramesUIEnabled

// Module 9183 (useIsSecureFramesUIEnabled)
import SecureFramesConstants from "SecureFramesConstants" /* 9165 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import size from "module_2" /* 2 */;

let closure_4 = SecureFramesConstants.END_TO_END_ENCRYPTION_DISABLED;
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  const obj = channelId(504);
  let items = [RTCConnectionStore, ChannelStore];
  const items1 = [channelId];
  return obj.useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [RTCConnectionStore, ChannelStore];
    [obj, obj2] = items;
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (obj.getChannelId() === channelId) {
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
            flag = null != version && version !== closure_4;
            const tmp4 = null != version && version !== closure_4;
          }
        }
      }
    }
    return flag;
  }, items1);
};
