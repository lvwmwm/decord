// Module ID: 9861
// Function ID: 9862
// Name: useCanRaiseHand
// Dependencies: [4120, 502, 586, 2]
// Exports: useCanRaiseHand

// Module 9861 (useCanRaiseHand)
import closure_2 from "getUncachedChannelPermissions" /* 4120 */;
import { Permissions } from "sum" /* 502 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [closure_2];
  return _require(586).useStateFromStores(items, () => closure_1_2.can(closure_1_3.REQUEST_TO_SPEAK, closure_0));
};
