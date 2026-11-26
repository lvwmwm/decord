// Module ID: 11957
// Function ID: 11958
// Name: SwipeToReplyExperiment
// Dependencies: [11958, 11959, 11960, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11957 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11958 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11959 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11960 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
