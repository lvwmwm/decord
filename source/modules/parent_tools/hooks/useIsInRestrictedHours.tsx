// Module ID: 17217
// Function ID: 17218
// Name: useIsInRestrictedHours
// Dependencies: [1921, 7470, 586, 17218, 2]
// Exports: default

// Module 17217 (useIsInRestrictedHours)
import initialize from "initialize" /* 586 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 17218 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "freshTeenActivityWithMap" /* 7470 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};
