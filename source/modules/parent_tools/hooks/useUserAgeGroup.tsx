// Module ID: 13987
// Function ID: 13988
// Name: useUserAgeGroup
// Dependencies: [6893, 589, 2]
// Exports: default

// Module 13987 (useUserAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
