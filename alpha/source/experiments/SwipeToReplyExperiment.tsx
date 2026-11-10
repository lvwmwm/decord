// Module ID: 11689
// Function ID: 11690
// Name: SwipeToReplyExperiment
// Dependencies: [11690, 11691, 11692, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11689 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11690 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11691 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11692 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
