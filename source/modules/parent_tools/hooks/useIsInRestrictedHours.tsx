// Module ID: 16030
// Function ID: 123844
// Name: useIsInRestrictedHours
// Dependencies: [1850, 5765, 566, 16031, 2]
// Exports: default

// Module 16030 (useIsInRestrictedHours)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [_isNativeReflectConstruct, closure_3];
  return require(566) /* initialize */.useStateFromStores(items, require(16031) /* _isNativeReflectConstruct */.getCurrentRestrictedHoursState);
};
