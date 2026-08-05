// Module ID: 16215
// Function ID: 16216
// Name: useIsInRestrictedHours
// Dependencies: [1874, 6890, 589, 16216, 2]
// Exports: default

// Module 16215 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16216) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
