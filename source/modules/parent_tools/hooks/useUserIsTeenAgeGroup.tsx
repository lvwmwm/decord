// Module ID: 14035
// Function ID: 14036
// Name: useUserIsTeenAgeGroup
// Dependencies: [6890, 589, 2]
// Exports: default

// Module 14035 (useUserIsTeenAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "teen" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
