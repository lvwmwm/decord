// Module ID: 9468
// Function ID: 73619
// Name: useCanRemoveAllReactions
// Dependencies: [3758, 653, 5650, 566, 2]
// Exports: default

// Module 9468 (useCanRemoveAllReactions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("useCanStartPublicThread").fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(stateFromStores) {
  const _require = stateFromStores;
  isActiveChannelOrUnarchivableThread = _require(isActiveChannelOrUnarchivableThread[2]).useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const obj = _require(isActiveChannelOrUnarchivableThread[2]);
  const items = [_isNativeReflectConstruct];
  const items1 = [stateFromStores, isActiveChannelOrUnarchivableThread];
  const obj2 = _require(isActiveChannelOrUnarchivableThread[3]);
  return null != stateFromStores && _require(isActiveChannelOrUnarchivableThread[3]).useStateFromStores(items, () => outer1_2.can(outer1_3.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
};
