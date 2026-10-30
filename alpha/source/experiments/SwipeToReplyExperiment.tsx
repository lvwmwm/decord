// Module ID: 11500
// Function ID: 11501
// Name: SwipeToReplyExperiment
// Dependencies: [11501, 11502, 11503, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11500 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11501 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11502 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11503 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
