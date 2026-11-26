// Module ID: 18107
// Function ID: 18108
// Name: useHomeDrawerGuildTyping
// Dependencies: [4977, 4896, 4892, 11531, 558, 18104, 18105, 504, 11, 2]
// Exports: useHomeDrawerGuildTyping

// Module 18107 (useHomeDrawerGuildTyping)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import shallowEqual from "shallowEqual" /* 558 */;
import ChannelRecord from "ChannelRecord" /* 4896 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4977 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import TypingStore from "TypingStore" /* 11531 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel;

function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    obj = shallowEqual;
    result = obj.areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
  }
  return result;
}
const isThread = ChannelRecord.isThread;
let obj = { typingChannelId: "Array", typingChannelName: "channel_id", typingUserIds: [] };
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export function useHomeDrawerGuildTyping(id) {
  let isHomeDrawerChannelInChannelList;
  _require = id;
  obj = require("isHomeDrawerChannelMuted");
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
    obj = SnowflakeUtilsDefault;
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
      obj2 = obj;
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
