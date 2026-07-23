// Module ID: 5723
// Function ID: 49190
// Name: getSpoilerGatingChannelId
// Dependencies: [1348, 5724, 566, 2]
// Exports: shouldShowSpoilerGateForChannelId, useGetSpoilerGatingChannelId, useIsChannelSpoilerGated, useShouldShowSpoilerGateForChannelId

// Module 5723 (getSpoilerGatingChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
function getSpoilerGatingChannelId(isSpoilerChannel, arg1, arg2) {
  let obj = arg1;
  let obj2 = arg2;
  if (arg1 === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = _isNativeReflectConstruct;
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
    tmp2 = _isNativeReflectConstruct;
  }
  return null != getSpoilerGatingChannelId(channel, tmp, tmp2);
}
const result = require("initialize").fileFinishedImporting("modules/spoiler_channels/SpoilerChannelUtils.tsx");

export const useGetSpoilerGatingChannelId = function useGetSpoilerGatingChannelId(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => outer1_4(closure_0, outer1_3, outer1_2), items1);
};
export { isChannelSpoilerGated };
export const useIsChannelSpoilerGated = function useIsChannelSpoilerGated(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [stateFromStores];
  return _require(566).useStateFromStores(items, () => outer1_5(closure_0, outer1_3, outer1_2), items1);
};
export const useShouldShowSpoilerGateForChannelId = function useShouldShowSpoilerGateForChannelId(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => outer1_5(outer1_2.getChannel(closure_0), outer1_3, outer1_2), items1);
};
export const shouldShowSpoilerGateForChannelId = function shouldShowSpoilerGateForChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isChannelSpoilerGated(channel.getChannel(channelId));
  }
  return tmp;
};
