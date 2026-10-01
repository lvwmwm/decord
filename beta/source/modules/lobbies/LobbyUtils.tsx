// Module ID: 10394
// Function ID: 10395
// Name: LobbyUtils
// Dependencies: [4469, 1074, 504, 2]
// Exports: canUnlinkLobbyChannel, useCanUnlinkLobbyChannel

// Module 10394 (LobbyUtils)
import Constants from "Constants" /* 1074 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export const canUnlinkLobbyChannel = function canUnlinkLobbyChannel(channel, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  let tmp = null != channel;
  if (tmp) {
    tmp = null != channel.linkedLobby && obj.can(Permissions.MANAGE_CHANNELS, channel) && obj.can(Permissions.VIEW_CHANNEL, channel) && obj.can(Permissions.SEND_MESSAGES, channel);
    const canResult = null != channel.linkedLobby && obj.can(Permissions.MANAGE_CHANNELS, channel) && obj.can(Permissions.VIEW_CHANNEL, channel) && obj.can(Permissions.SEND_MESSAGES, channel);
  }
  return tmp;
};
export const useCanUnlinkLobbyChannel = function useCanUnlinkLobbyChannel(channel) {
  _require = channel;
  const obj = require("get initialized");
  const items = [PermissionStore];
  return obj.useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      let tmp3 = null != tmp;
      if (tmp3) {
        tmp3 = null != tmp.linkedLobby && obj.can(Permissions.MANAGE_CHANNELS, tmp) && obj.can(Permissions.VIEW_CHANNEL, tmp) && obj.can(Permissions.SEND_MESSAGES, tmp);
        const canResult = null != tmp.linkedLobby && obj.can(Permissions.MANAGE_CHANNELS, tmp) && obj.can(Permissions.VIEW_CHANNEL, tmp) && obj.can(Permissions.SEND_MESSAGES, tmp);
      }
      return tmp3;
    }
  });
};
