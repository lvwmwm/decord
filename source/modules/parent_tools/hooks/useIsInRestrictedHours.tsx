// Module ID: 16442
// Function ID: 16443
// Name: useIsInRestrictedHours
// Dependencies: [1922, 7044, 589, 16443, 2]
// Exports: default

// Module 16442 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16443) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
