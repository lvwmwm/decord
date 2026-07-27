// Module ID: 16042
// Function ID: 123891
// Name: useIsInRestrictedHours
// Dependencies: [1850, 5765, 566, 16043, 2]
// Exports: default

// Module 16042 (useIsInRestrictedHours)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [_isNativeReflectConstruct, closure_3];
  return require(566) /* initialize */.useStateFromStores(items, require(16043) /* _isNativeReflectConstruct */.getCurrentRestrictedHoursState);
};
