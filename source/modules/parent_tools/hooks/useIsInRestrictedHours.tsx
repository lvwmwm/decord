// Module ID: 16116
// Function ID: 16117
// Name: useIsInRestrictedHours
// Dependencies: [1874, 5793, 589, 16117, 2]
// Exports: default

// Module 16116 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16117) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
