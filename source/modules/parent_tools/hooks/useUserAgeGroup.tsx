// Module ID: 13835
// Function ID: 106077
// Name: useUserAgeGroup
// Dependencies: [5765, 566, 2]
// Exports: default

// Module 13835 (useUserAgeGroup)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getAgeGroup());
};
