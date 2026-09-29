// Module ID: 11555
// Function ID: 11556
// Name: useCanRemoveAllReactions
// Dependencies: [4427, 1074, 7543, 504, 2]
// Exports: default

// Module 11555 (useCanRemoveAllReactions)
import PermissionStore from "PermissionStore" /* 4427 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(channel) {
  _require = channel;
  isActiveChannelOrUnarchivableThread = require("ThreadHooks").useIsActiveChannelOrUnarchivableThread(channel);
  const obj = require("ThreadHooks");
  const items = [PermissionStore];
  const items1 = [channel, isActiveChannelOrUnarchivableThread];
  const obj2 = require("initialize");
  return null != channel && require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
};
