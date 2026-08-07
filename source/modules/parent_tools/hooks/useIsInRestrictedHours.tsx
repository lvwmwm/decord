// Module ID: 16281
// Function ID: 16282
// Name: useIsInRestrictedHours
// Dependencies: [1903, 6936, 589, 16282, 2]
// Exports: default

// Module 16281 (useIsInRestrictedHours)
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require(589) /* initialize */.useStateFromStores(items, require(16282) /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};
