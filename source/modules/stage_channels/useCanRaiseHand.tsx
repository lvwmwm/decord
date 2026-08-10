// Module ID: 10810
// Function ID: 10811
// Name: useCanRaiseHand
// Dependencies: [3929, 505, 589, 2]
// Exports: useCanRaiseHand

// Module 10810 (useCanRaiseHand)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => outer1_2.can(outer1_3.REQUEST_TO_SPEAK, closure_0));
};
