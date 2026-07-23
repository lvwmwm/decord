// Module ID: 14851
// Function ID: 113312
// Name: areHomeDrawerGuildTypingStatesEqual
// Dependencies: [3760, 1352, 1348, 11108, 620, 14847, 14848, 566, 21, 2]
// Exports: useHomeDrawerGuildTyping

// Module 14851 (areHomeDrawerGuildTypingStatesEqual)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isThread } from "_callSuper";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = require(620) /* shallowEqual */.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
    const obj = require(620) /* shallowEqual */;
  }
  return result;
}
let closure_7 = { typingChannelId: undefined, typingChannelName: undefined, typingUserIds: [] };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = function useHomeDrawerGuildTyping(id) {
  const _require = id;
  const isHomeDrawerChannelMuted = _require(isHomeDrawerChannelInChannelList[5]).useIsHomeDrawerChannelMuted();
  let obj = _require(isHomeDrawerChannelInChannelList[5]);
  isHomeDrawerChannelInChannelList = _require(isHomeDrawerChannelInChannelList[6]).useIsHomeDrawerChannelInChannelList();
  const obj2 = _require(isHomeDrawerChannelInChannelList[6]);
  const items = [closure_6, closure_5, _isNativeReflectConstruct];
  const items1 = [id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  return _require(isHomeDrawerChannelInChannelList[7]).useStateFromStores(items, () => {
    const typingUsersByGuild = outer1_6.getTypingUsersByGuild(closure_0);
    let obj = isHomeDrawerChannelMuted(isHomeDrawerChannelInChannelList[8]);
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((arg0) => {
      const basicChannel = outer2_5.getBasicChannel(arg0);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = !outer1_1(basicChannel);
      }
      if (tmp2) {
        let tmp5 = outer2_4(basicChannel.type);
        if (tmp5) {
          tmp5 = !outer2_3.hasJoined(arg0);
        }
        let tmp7 = !tmp5;
        if (tmp7) {
          tmp7 = outer1_2(basicChannel);
        }
        tmp2 = tmp7;
      }
      return tmp2;
    });
    if (null == found) {
      obj = outer1_7;
    } else {
      obj = { typingChannelId: found };
      const channel = outer1_5.getChannel(found);
      let name;
      if (null != channel) {
        name = channel.name;
      }
      obj.typingChannelName = name;
      const _Object = Object;
      obj.typingUserIds = Object.keys(typingUsersByGuild[found]);
    }
    return obj;
  }, items1, areHomeDrawerGuildTypingStatesEqual);
};
