// Module ID: 16451
// Function ID: 16452
// Name: useIsInRestrictedHours
// Dependencies: [1922, 7044, 589, 16452, 2]
// Exports: default

// Module 16451 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16452) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
