// Module ID: 10250
// Function ID: 10251
// Name: useCanRemoveAllReactions
// Dependencies: [5102, 1072, 7540, 504, 2]
// Exports: default

// Module 10250 (useCanRemoveAllReactions)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 5102 */;
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
