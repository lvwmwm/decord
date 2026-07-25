// Module ID: 15039
// Function ID: 114617
// Name: useVoiceStatesForChannelList
// Dependencies: [1348, 4204, 1351, 566, 1841, 2]
// Exports: default

// Module 15039 (useVoiceStatesForChannelList)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/useVoiceStatesForChannelList.tsx");

export default function useVoiceStatesForChannelList(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct, closure_4];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => {
    let obj = callback(outer1_1[4]);
    if (obj.isFavoritesGuildId(callback)) {
      const favoriteChannels = outer1_4.getFavoriteChannels();
      obj = {};
      for (const key10020 in favoriteChannels) {
        let tmp8 = key10020;
        let tmp9 = outer1_2;
        let channel = outer1_2.getChannel(key10020);
        if (null == channel) {
          continue;
        } else {
          let tmp7 = outer1_3;
          obj[key10020] = outer1_3.getVoiceStatesForChannel(channel);
          continue;
        }
        continue;
      }
      return obj;
    } else {
      return outer1_3.getVoiceStates(callback);
    }
  }, items1);
};
