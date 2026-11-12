// Module ID: 11712
// Function ID: 11713
// Name: SwipeToReplyExperiment
// Dependencies: [11713, 11714, 11715, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11712 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11713 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11714 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11715 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
