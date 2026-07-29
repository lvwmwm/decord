// Module ID: 13942
// Function ID: 13943
// Name: useUserIsTeenAgeGroup
// Dependencies: [5793, 589, 2]
// Exports: default

// Module 13942 (useUserIsTeenAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "teen" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
