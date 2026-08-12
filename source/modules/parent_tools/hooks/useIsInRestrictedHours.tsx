// Module ID: 16440
// Function ID: 16441
// Name: useIsInRestrictedHours
// Dependencies: [1922, 7038, 589, 16441, 2]
// Exports: default

// Module 16440 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16441) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
