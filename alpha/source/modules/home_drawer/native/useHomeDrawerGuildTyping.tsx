// Module ID: 18382
// Function ID: 18383
// Name: useHomeDrawerGuildTyping
// Dependencies: [4948, 4867, 4863, 13714, 558, 18379, 18380, 504, 11, 2]
// Exports: useHomeDrawerGuildTyping

// Module 18382 (useHomeDrawerGuildTyping)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import shallowEqual from "shallowEqual" /* 558 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4948 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import TypingStore from "TypingStore" /* 13714 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel;

function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    const obj = shallowEqual;
    result = obj.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
  }
  return result;
}
const isThread = ChannelRecord.isThread;
let closure_7 = { typingChannelId: "Array", typingChannelName: "flexDirection", typingUserIds: [] };
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export function useHomeDrawerGuildTyping(id) {
  let isHomeDrawerChannelInChannelList;
  _require = id;
  let obj = require("isHomeDrawerChannelMuted");
  const isHomeDrawerChannelMuted = obj.useIsHomeDrawerChannelMuted();
  let obj2 = require("isHomeDrawerChannelInChannelList");
  isHomeDrawerChannelInChannelList = obj2.useIsHomeDrawerChannelInChannelList();
  const items = [TypingStore, ChannelStore, JoinedThreadsStore];
  const items1 = [id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const obj3 = require("get initialized");
  return obj3.useStateFromStores(items, () => {
    let name;
    let obj2;
    const typingUsersByGuild = TypingStore.getTypingUsersByGuild(id);
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let tmp2 = null != basicChannel && !isHomeDrawerChannelMuted(basicChannel);
      if (tmp2) {
        const tmp5 = isThread(basicChannel.type) && !JoinedThreadsStore.hasJoined(item);
        tmp2 = !tmp5 && isHomeDrawerChannelInChannelList(basicChannel);
        const tmp7 = !tmp5 && isHomeDrawerChannelInChannelList(basicChannel);
      }
      return tmp2;
    });
    if (null == found) {
      obj2 = closure_7;
    } else {
      obj2 = { typingChannelId: found, typingChannelName: name, typingUserIds: Object.keys(typingUsersByGuild[found]) };
      const channel = ChannelStore.getChannel(found);
      name = undefined;
      if (channel != null) {
        name = channel.name;
      }
      const _Object = Object;
    }
    return obj2;
  }, items1, areHomeDrawerGuildTypingStatesEqual);
}
