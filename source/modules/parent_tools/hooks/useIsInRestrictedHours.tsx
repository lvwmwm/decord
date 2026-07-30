// Module ID: 16110
// Function ID: 16111
// Name: useIsInRestrictedHours
// Dependencies: [1874, 5793, 589, 16111, 2]
// Exports: default

// Module 16110 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16111) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
