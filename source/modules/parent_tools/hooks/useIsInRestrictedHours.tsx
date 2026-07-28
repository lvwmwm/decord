// Module ID: 16081
// Function ID: 124047
// Name: useIsInRestrictedHours
// Dependencies: [1850, 5775, 566, 16082, 2]
// Exports: default

// Module 16081 (useIsInRestrictedHours)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [_isNativeReflectConstruct, closure_3];
  return require(566) /* initialize */.useStateFromStores(items, require(16082) /* _isNativeReflectConstruct */.getCurrentRestrictedHoursState);
};
