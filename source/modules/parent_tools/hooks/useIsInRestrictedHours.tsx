// Module ID: 16510
// Function ID: 16511
// Name: useIsInRestrictedHours
// Dependencies: [1922, 5296, 589, 16511, 2]
// Exports: default

// Module 16510 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16511) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
