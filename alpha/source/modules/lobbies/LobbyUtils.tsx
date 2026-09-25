// Module ID: 10383
// Function ID: 10384
// Name: LobbyUtils
// Dependencies: [4466, 1074, 504, 2]
// Exports: canUnlinkLobbyChannel, useCanUnlinkLobbyChannel

// Module 10383 (LobbyUtils)
import PermissionStore from "PermissionStore" /* 4466 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export const canUnlinkLobbyChannel = function canUnlinkLobbyChannel(channel, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
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
};
export const useCanUnlinkLobbyChannel = function useCanUnlinkLobbyChannel(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      let tmp3 = null != tmp;
      if (tmp3) {
        let canResult = null != tmp.linkedLobby;
        if (canResult) {
          canResult = obj.can(Permissions.MANAGE_CHANNELS, tmp);
        }
        if (canResult) {
          canResult = obj.can(Permissions.VIEW_CHANNEL, tmp);
        }
        if (canResult) {
          canResult = obj.can(Permissions.SEND_MESSAGES, tmp);
        }
        tmp3 = canResult;
      }
      return tmp3;
    }
  });
};
