// Module ID: 7404
// Function ID: 7405
// Name: useIsInAdultAgeGroup
// Dependencies: [7066, 589, 2]
// Exports: default

// Module 7404 (useIsInAdultAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "adult" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
