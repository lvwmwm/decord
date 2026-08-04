// Module ID: 14061
// Function ID: 14062
// Name: useUserIsTeenAgeGroup
// Dependencies: [6905, 589, 2]
// Exports: default

// Module 14061 (useUserIsTeenAgeGroup)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [freshTeenActivityWithMap];
  return "teen" === require(589) /* initialize */.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
