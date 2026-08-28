// Module ID: 16806
// Function ID: 16807
// Name: useIsInRestrictedHours
// Dependencies: [1923, 7229, 589, 16807, 2]
// Exports: default

// Module 16806 (useIsInRestrictedHours)
import initialize from "initialize" /* 589 */;
import scheduleUpcomingWarning from "scheduleUpcomingWarning" /* 16807 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;
import closure_3 from "freshTeenActivityWithMap" /* 7229 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [closure_2, closure_3];
  return initialize.useStateFromStores(items, scheduleUpcomingWarning.getCurrentRestrictedHoursState);
};
