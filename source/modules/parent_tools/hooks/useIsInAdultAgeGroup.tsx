// Module ID: 7339
// Function ID: 7340
// Name: useIsInAdultAgeGroup
// Dependencies: [6999, 589, 2]
// Exports: default

// Module 7339 (useIsInAdultAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "adult" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
