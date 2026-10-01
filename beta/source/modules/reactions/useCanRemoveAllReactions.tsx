// Module ID: 10830
// Function ID: 10831
// Name: useCanRemoveAllReactions
// Dependencies: [4469, 1074, 6687, 504, 2]
// Exports: default

// Module 10830 (useCanRemoveAllReactions)
import Constants from "Constants" /* 1074 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(channel) {
  let isActiveChannelOrUnarchivableThread;
  _require = channel;
  const obj = require("ThreadHooks");
  isActiveChannelOrUnarchivableThread = obj.useIsActiveChannelOrUnarchivableThread(channel);
  const items = [PermissionStore];
  const items1 = [channel, isActiveChannelOrUnarchivableThread];
  const obj2 = require("get initialized");
  const tmp2 = null != channel && obj2.useStateFromStores(items, () => {
    const tmp = PermissionStore.can(Permissions.MANAGE_MESSAGES, channel) && isActiveChannelOrUnarchivableThread;
    return tmp;
  }, items1);
  return tmp2;
};
