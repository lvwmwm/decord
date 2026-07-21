// Module ID: 10160
// Function ID: 78555
// Name: canUnlinkLobbyChannel
// Dependencies: [555352064, 488505344, 250937344, 131072]
// Exports: useCanUnlinkLobbyChannel

// Module 10160 (canUnlinkLobbyChannel)
function canUnlinkLobbyChannel(channel, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  let tmp = null != channel;
  if (tmp) {
    let canResult = null != channel.linkedLobby;
    if (canResult) {
      canResult = obj.can(Permissions.MANAGE_CHANNELS, channel);
    }
    if (canResult) {
      canResult = obj.can(Permissions.VIEW_CHANNEL, channel);
    }
    if (canResult) {
      canResult = obj.can(Permissions.SEND_MESSAGES, channel);
    }
    tmp = canResult;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export { canUnlinkLobbyChannel };
export const useCanUnlinkLobbyChannel = function useCanUnlinkLobbyChannel(channel) {
  const arg1 = channel;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => callback(arg0, closure_2));
};
