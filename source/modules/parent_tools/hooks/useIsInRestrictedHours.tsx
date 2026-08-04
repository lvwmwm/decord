// Module ID: 16234
// Function ID: 16235
// Name: useIsInRestrictedHours
// Dependencies: [1874, 6905, 589, 16235, 2]
// Exports: default

// Module 16234 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16235) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
