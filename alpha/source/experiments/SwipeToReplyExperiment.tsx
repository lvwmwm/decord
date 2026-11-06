// Module ID: 11698
// Function ID: 11699
// Name: SwipeToReplyExperiment
// Dependencies: [11699, 11700, 11701, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11698 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11699 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11700 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11701 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
