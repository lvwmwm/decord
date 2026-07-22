// Module ID: 14735
// Function ID: 111144
// Name: areHomeDrawerGuildTypingStatesEqual
// Dependencies: []
// Exports: useHomeDrawerGuildTyping

// Module 14735 (areHomeDrawerGuildTypingStatesEqual)
function areHomeDrawerGuildTypingStatesEqual(typingChannelId, typingChannelId2) {
  let result = typingChannelId.typingChannelId === typingChannelId2.typingChannelId && typingChannelId.typingChannelName === typingChannelId2.typingChannelName;
  if (result) {
    result = typingChannelId2(dependencyMap[2]).areArraysShallowEqual(typingChannelId.typingUserIds, typingChannelId2.typingUserIds);
    const obj = typingChannelId2(dependencyMap[2]);
  }
  return result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = { typingChannelId: undefined, typingChannelName: undefined, typingUserIds: [] };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGuildTyping.tsx");

export const useHomeDrawerGuildTyping = function useHomeDrawerGuildTyping(id) {
  const arg1 = id;
  const isHomeDrawerChannelMuted = arg1(dependencyMap[3]).useIsHomeDrawerChannelMuted();
  const importDefault = isHomeDrawerChannelMuted;
  const obj = arg1(dependencyMap[3]);
  const items = [closure_4, closure_3];
  const items1 = [id, isHomeDrawerChannelMuted];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const typingUsersByGuild = typingUsersByGuild.getTypingUsersByGuild(arg0);
    let obj = isHomeDrawerChannelMuted(closure_2[5]);
    const keys = obj.keys(typingUsersByGuild);
    const found = keys.find((arg0) => {
      const basicChannel = basicChannel.getBasicChannel(arg0);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        tmp2 = !callback(basicChannel);
      }
      return tmp2;
    });
    if (null == found) {
      obj = closure_5;
    } else {
      obj = { typingChannelId: found };
      const channel = channel.getChannel(found);
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
