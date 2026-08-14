// Module ID: 12610
// Function ID: 12611
// Name: useCanRemoveAllReactions
// Dependencies: [3989, 676, 5951, 589, 2]
// Exports: default

// Module 12610 (useCanRemoveAllReactions)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("useCanUnarchiveThread").fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(channel) {
  const _require = channel;
  isActiveChannelOrUnarchivableThread = _require(isActiveChannelOrUnarchivableThread[2]).useIsActiveChannelOrUnarchivableThread(channel);
  const obj = _require(isActiveChannelOrUnarchivableThread[2]);
  const items = [getUncachedChannelPermissions];
  const items1 = [channel, isActiveChannelOrUnarchivableThread];
  const obj2 = _require(isActiveChannelOrUnarchivableThread[3]);
  return null != channel && _require(isActiveChannelOrUnarchivableThread[3]).useStateFromStores(items, () => outer1_2.can(outer1_3.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
};
