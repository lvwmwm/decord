// Module ID: 10199
// Function ID: 78810
// Name: canUnlinkLobbyChannel
// Dependencies: [3758, 653, 566, 2]
// Exports: useCanUnlinkLobbyChannel

// Module 10199 (canUnlinkLobbyChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function canUnlinkLobbyChannel(channel, closure_0) {
  let obj = closure_0;
  if (closure_0 === undefined) {
    obj = _isNativeReflectConstruct;
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
const result = require("initialize").fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export { canUnlinkLobbyChannel };
export const useCanUnlinkLobbyChannel = function useCanUnlinkLobbyChannel(channel) {
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_4(closure_0, outer1_2));
};
