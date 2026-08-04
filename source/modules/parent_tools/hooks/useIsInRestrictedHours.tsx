// Module ID: 16235
// Function ID: 16236
// Name: useIsInRestrictedHours
// Dependencies: [1874, 6905, 589, 16236, 2]
// Exports: default

// Module 16235 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16236) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
