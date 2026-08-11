// Module ID: 14125
// Function ID: 14126
// Name: useUserAgeGroup
// Dependencies: [6999, 589, 2]
// Exports: default

// Module 14125 (useUserAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
