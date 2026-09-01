// Module ID: 16875
// Function ID: 16876
// Name: useIsInRestrictedHours
// Dependencies: [1922, 7282, 589, 16876, 2]
// Exports: default

// Module 16875 (useIsInRestrictedHours)
import initialize from "initialize" /* 589 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 16876 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import closure_3 from "freshTeenActivityWithMap" /* 7282 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};
