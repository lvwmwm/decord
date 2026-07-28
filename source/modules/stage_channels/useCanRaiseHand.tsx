// Module ID: 10706
// Function ID: 83235
// Name: useCanRaiseHand
// Dependencies: [3793, 482, 566, 2]
// Exports: useCanRaiseHand

// Module 10706 (useCanRaiseHand)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_2.can(outer1_3.REQUEST_TO_SPEAK, closure_0));
};
