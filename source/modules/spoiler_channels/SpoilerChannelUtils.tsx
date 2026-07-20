// Module ID: 5717
// Function ID: 49104
// Name: getSpoilerGatingChannelId
// Dependencies: []
// Exports: shouldShowSpoilerGateForChannelId, useGetSpoilerGatingChannelId, useIsChannelSpoilerGated, useShouldShowSpoilerGateForChannelId

// Module 5717 (getSpoilerGatingChannelId)
function getSpoilerGatingChannelId(isSpoilerChannel, arg1, arg2) {
  let obj = arg1;
  let obj2 = arg2;
  if (arg1 === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_2;
  }
  if (null == isSpoilerChannel) {
    return null;
  } else if (isSpoilerChannel.isSpoilerChannel()) {
    let id = null;
    if (!obj.didAgree(isSpoilerChannel.id)) {
      id = isSpoilerChannel.id;
    }
    return id;
  } else {
    if (null != isSpoilerChannel.parent_id) {
      const channel = obj2.getChannel(isSpoilerChannel.parent_id);
      if (null != channel) {
        if (channel.isSpoilerChannel()) {
          if (!obj.didAgree(channel.id)) {
            return channel.id;
          }
        }
      }
    }
    return null;
  }
}
function isChannelSpoilerGated(channel) {
  let tmp = arg1;
  let tmp2 = arg2;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  if (tmp2 === undefined) {
    tmp2 = closure_2;
  }
  return null != getSpoilerGatingChannelId(channel, tmp, tmp2);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = function useGetSpoilerGatingChannelId(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => callback(arg0, closure_3, closure_2), items1);
};
export { isChannelSpoilerGated };
export const useIsChannelSpoilerGated = function useIsChannelSpoilerGated(stateFromStores) {
  const arg1 = stateFromStores;
  const items = [closure_3, closure_2];
  const items1 = [stateFromStores];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => callback(arg0, closure_3, closure_2), items1);
};
export const useShouldShowSpoilerGateForChannelId = function useShouldShowSpoilerGateForChannelId(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => callback(channel.getChannel(arg0), closure_3, channel), items1);
};
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(channel.getChannel(channelId));
  }
  return tmp;
};
