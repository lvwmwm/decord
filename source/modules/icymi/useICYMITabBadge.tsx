// Module ID: 15165
// Function ID: 115468
// Name: useICYMITabBadge
// Dependencies: [8350, 566, 2]
// Exports: default, icymiTabBadgeShown

// Module 15165 (useICYMITabBadge)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0 };
  const items = [_isNativeReflectConstruct];
  obj.showDot = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.hasNewContent(), []);
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return _isNativeReflectConstruct.hasNewContent();
};
