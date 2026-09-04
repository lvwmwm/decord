// Module ID: 9099
// Function ID: 9100
// Name: useIsSecureFramesUIEnabled
// Dependencies: [1386, 4557, 9081, 586, 2]
// Exports: useIsSecureFramesUIEnabled

// Module 9099 (useIsSecureFramesUIEnabled)
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "createRTCConnection" /* 4557 */;
import { END_TO_END_ENCRYPTION_DISABLED as closure_4 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY" /* 9081 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [closure_3, closure_2];
  const items1 = [channelId];
  return channelId(586).useStateFromStores(items, () => {
    const items = [closure_1_3, closure_1_2];
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
              tmp4 = version !== closure_1_4;
            }
            flag = tmp4;
          }
        }
      }
    }
    return flag;
  }, items1);
};
