// Module ID: 14117
// Function ID: 14118
// Name: useUserAgeGroup
// Dependencies: [6996, 589, 2]
// Exports: default

// Module 14117 (useUserAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
