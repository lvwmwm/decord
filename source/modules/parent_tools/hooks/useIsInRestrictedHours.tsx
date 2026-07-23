// Module ID: 15972
// Function ID: 123354
// Name: useIsInRestrictedHours
// Dependencies: [1849, 6769, 566, 15973, 2]
// Exports: default

// Module 15972 (useIsInRestrictedHours)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [_isNativeReflectConstruct, closure_3];
  return require(566) /* initialize */.useStateFromStores(items, require(15973) /* _isNativeReflectConstruct */.getCurrentRestrictedHoursState);
};
