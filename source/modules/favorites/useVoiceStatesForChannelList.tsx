// Module ID: 15029
// Function ID: 114490
// Name: useVoiceStatesForChannelList
// Dependencies: [1348, 4203, 1351, 653, 566, 2]
// Exports: default

// Module 15029 (useVoiceStatesForChannelList)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { FAVORITES } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/useVoiceStatesForChannelList.tsx");

export default function useVoiceStatesForChannelList(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct, closure_4];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => {
    if (closure_0 !== outer1_5) {
      return outer1_3.getVoiceStates(closure_0);
    } else {
      const favoriteChannels = outer1_4.getFavoriteChannels();
      const obj = {};
      for (const key10009 in favoriteChannels) {
        let tmp8 = key10009;
        let tmp9 = outer1_2;
        let channel = outer1_2.getChannel(key10009);
        if (null == channel) {
          continue;
        } else {
          let tmp5 = outer1_3;
          obj[key10009] = outer1_3.getVoiceStatesForChannel(channel);
          continue;
        }
        continue;
      }
      return obj;
    }
  }, items1);
};
