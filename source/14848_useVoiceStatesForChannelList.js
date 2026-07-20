// Module ID: 14848
// Function ID: 111900
// Name: useVoiceStatesForChannelList
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14848 (useVoiceStatesForChannelList)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import { FAVORITES } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/favorites/useVoiceStatesForChannelList.tsx");

export default function useVoiceStatesForChannelList(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2, closure_4];
  const items1 = [arg0];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    if (arg0 !== closure_5) {
      return voiceStates.getVoiceStates(arg0);
    } else {
      const favoriteChannels = favoriteChannels.getFavoriteChannels();
      const obj = {};
      for (const key10009 in favoriteChannels) {
        let tmp8 = key10009;
        let tmp9 = closure_2;
        let channel = closure_2.getChannel(key10009);
        if (null == channel) {
          continue;
        } else {
          let tmp5 = closure_3;
          obj[key10009] = closure_3.getVoiceStatesForChannel(channel);
          // continue
        }
        continue;
      }
      return obj;
    }
  }, items1);
};
