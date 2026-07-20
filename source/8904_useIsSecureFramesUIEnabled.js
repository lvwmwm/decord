// Module ID: 8904
// Function ID: 70276
// Name: useIsSecureFramesUIEnabled
// Dependencies: [0, 0, 0, 0, 0]
// Exports: useIsSecureFramesUIEnabled

// Module 8904 (useIsSecureFramesUIEnabled)
import closure_2 from "result";
import closure_3 from "result";
import { END_TO_END_ENCRYPTION_DISABLED as closure_4 } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const items = [closure_3, closure_2];
  const items1 = [channelId];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let obj;
    let obj2;
    let items = [closure_3, closure_2];
    if (items === undefined) {
      const items1 = [closure_3, closure_2];
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
              tmp6 = version !== closure_4;
            }
            flag = tmp6;
          }
        }
      }
    }
    return flag;
  }, items1);
};
