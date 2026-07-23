// Module ID: 8916
// Function ID: 70353
// Name: useIsSecureFramesUIEnabled
// Dependencies: [1348, 4202, 8899, 566, 2]
// Exports: useIsSecureFramesUIEnabled

// Module 8916 (useIsSecureFramesUIEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { END_TO_END_ENCRYPTION_DISABLED as closure_4 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";

const require = arg1;
const result = require("SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [closure_3, _isNativeReflectConstruct];
  let items1 = [channelId];
  return channelId(566).useStateFromStores(items, () => {
    let obj;
    let obj2;
    let items = [outer1_3, outer1_2];
    if (items === undefined) {
      const items1 = [outer1_3, outer1_2];
      items = items1;
    }
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
            if (null != secureFramesState) {
              version = secureFramesState.version;
            }
            let tmp6 = null != version;
            if (tmp6) {
              tmp6 = version !== outer1_4;
            }
            flag = tmp6;
          }
        }
      }
    }
    return flag;
  }, items1);
};
