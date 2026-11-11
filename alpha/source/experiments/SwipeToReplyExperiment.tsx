// Module ID: 12312
// Function ID: 12313
// Name: SwipeToReplyExperiment
// Dependencies: [12313, 12314, 12315, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 12312 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 12313 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 12314 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 12315 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
