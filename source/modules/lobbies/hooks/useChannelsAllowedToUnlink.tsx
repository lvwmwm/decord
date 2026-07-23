// Module ID: 16214
// Function ID: 125919
// Name: getChannelsAllowedToUnlink
// Dependencies: [1907, 3758, 10169, 566, 2]
// Exports: useChannelsAllowedToUnlink

// Module 16214 (getChannelsAllowedToUnlink)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

let require = arg1;
function getChannelsAllowedToUnlink(arg0) {
  let obj = arg1;
  let tmp = arg2;
  if (arg1 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  const require = tmp;
  if (null == arg0) {
    let items = [];
  } else {
    const found = obj.getChannels(arg0)[closure_3].filter((channel) => tmp(outer1_1[2]).canUnlinkLobbyChannel(channel.channel, tmp));
    items = found.map((channel) => channel.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
}
const result = require("canUnlinkLobbyChannel").fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export { getChannelsAllowedToUnlink };
export const useChannelsAllowedToUnlink = function useChannelsAllowedToUnlink(id) {
  const _require = id;
  const items = [closure_4, _isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => outer1_5(closure_0, outer1_2, outer1_4));
};
