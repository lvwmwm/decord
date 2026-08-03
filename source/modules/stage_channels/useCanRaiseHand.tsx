// Module ID: 10852
// Function ID: 10853
// Name: useCanRaiseHand
// Dependencies: [3883, 505, 589, 2]
// Exports: useCanRaiseHand

// Module 10852 (useCanRaiseHand)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => outer1_2.can(outer1_3.REQUEST_TO_SPEAK, closure_0));
};
