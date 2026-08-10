// Module ID: 16367
// Function ID: 16368
// Name: useIsInRestrictedHours
// Dependencies: [1903, 6996, 589, 16368, 2]
// Exports: default

// Module 16367 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16368) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
