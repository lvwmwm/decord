// Module ID: 14020
// Function ID: 14021
// Name: useUserAgeGroup
// Dependencies: [6905, 589, 2]
// Exports: default

// Module 14020 (useUserAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
