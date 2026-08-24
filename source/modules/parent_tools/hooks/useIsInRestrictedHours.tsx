// Module ID: 16605
// Function ID: 16606
// Name: useIsInRestrictedHours
// Dependencies: [1922, 5301, 589, 16606, 2]
// Exports: default

// Module 16605 (useIsInRestrictedHours)
import initialize from "initialize" /* 589 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 16606 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import closure_3 from "freshTeenActivityWithMap" /* 5301 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};
