// Module ID: 6201
// Function ID: 55650
// Name: useIsInAdultAgeGroup
// Dependencies: [5765, 566, 2]
// Exports: default

// Module 6201 (useIsInAdultAgeGroup)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [_isNativeReflectConstruct];
  return "adult" === require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getAgeGroup());
};
