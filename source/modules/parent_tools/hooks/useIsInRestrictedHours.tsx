// Module ID: 16255
// Function ID: 16256
// Name: useIsInRestrictedHours
// Dependencies: [1903, 6917, 589, 16256, 2]
// Exports: default

// Module 16255 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16256) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
