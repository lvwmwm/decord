// Module ID: 6259
// Function ID: 6260
// Name: useIsInAdultAgeGroup
// Dependencies: [5798, 589, 2]
// Exports: default

// Module 6259 (useIsInAdultAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "adult" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
