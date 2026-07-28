// Module ID: 13921
// Function ID: 106469
// Name: useUserIsTeenAgeGroup
// Dependencies: [5775, 566, 2]
// Exports: default

// Module 13921 (useUserIsTeenAgeGroup)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [_isNativeReflectConstruct];
  return "teen" === require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getAgeGroup());
};
