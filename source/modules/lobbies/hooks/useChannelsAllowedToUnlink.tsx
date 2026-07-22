// Module ID: 16097
// Function ID: 123746
// Name: getChannelsAllowedToUnlink
// Dependencies: []
// Exports: useChannelsAllowedToUnlink

// Module 16097 (getChannelsAllowedToUnlink)
function getChannelsAllowedToUnlink(arg0) {
  let obj = arg1;
  let tmp = arg2;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  const arg1 = tmp;
  if (null == arg0) {
    let items = [];
  } else {
    const found = obj.getChannels(arg0)[closure_3].filter((channel) => tmp(closure_1[2]).canUnlinkLobbyChannel(channel.channel, tmp));
    items = found.map((channel) => channel.channel);
    const arr = obj.getChannels(arg0)[closure_3];
  }
  return items;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[0]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/lobbies/hooks/useChannelsAllowedToUnlink.tsx");

export { getChannelsAllowedToUnlink };
export const useChannelsAllowedToUnlink = function useChannelsAllowedToUnlink(id) {
  const arg1 = id;
  const items = [closure_4, closure_2];
  return arg1(dependencyMap[3]).useStateFromStoresArray(items, () => callback(arg0, closure_2, closure_4));
};
