// Module ID: 14855
// Function ID: 111924
// Name: useVoiceStatesForChannelList
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14855 (useVoiceStatesForChannelList)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { FAVORITES } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/favorites/useVoiceStatesForChannelList.tsx");

export default function useVoiceStatesForChannelList(arg0) {
  const arg1 = arg0;
  const items = [closure_3, __exportStarResult1, closure_4];
  const items1 = [arg0];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    if (arg0 !== closure_5) {
      return voiceStates.getVoiceStates(arg0);
    } else {
      const favoriteChannels = favoriteChannels.getFavoriteChannels();
      const obj = {};
      for (const key10009 in favoriteChannels) {
        let tmp8 = key10009;
        let tmp9 = __exportStarResult1;
        let channel = __exportStarResult1.getChannel(key10009);
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
