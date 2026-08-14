// Module ID: 16460
// Function ID: 16461
// Name: useIsInRestrictedHours
// Dependencies: [1922, 7066, 589, 16461, 2]
// Exports: default

// Module 16460 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16461) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
