// Module ID: 10818
// Function ID: 10819
// Name: useCanRemoveAllReactions
// Dependencies: [4089, 676, 6068, 589, 2]
// Exports: default

// Module 10818 (useCanRemoveAllReactions)
import closure_2 from "getUncachedChannelPermissions" /* 4089 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(channel) {
  const _require = channel;
  isActiveChannelOrUnarchivableThread = _require(isActiveChannelOrUnarchivableThread[2]).useIsActiveChannelOrUnarchivableThread(channel);
  const obj = _require(isActiveChannelOrUnarchivableThread[2]);
  const items = [closure_2];
  const items1 = [channel, isActiveChannelOrUnarchivableThread];
  const obj2 = _require(isActiveChannelOrUnarchivableThread[3]);
  return null != channel && _require(isActiveChannelOrUnarchivableThread[3]).useStateFromStores(items, () => closure_1_2.can(closure_1_3.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
};
