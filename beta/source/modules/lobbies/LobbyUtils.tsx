// Module ID: 11274
// Function ID: 11275
// Name: LobbyUtils
// Dependencies: [4431, 1078, 558, 568, 504, 2]
// Exports: canUnlinkLobbyChannel

// Module 11274 (LobbyUtils)
import PermissionStore from "PermissionStore" /* 4431 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1078).Permissions;
const ReactCompilerGating = fn(558);
function canUnlinkLobbyChannel(channel, arg1) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/lobbies/LobbyUtils.tsx");

export { canUnlinkLobbyChannel };
export const useCanUnlinkLobbyChannel = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function t() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
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
});
