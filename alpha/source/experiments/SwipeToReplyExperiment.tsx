// Module ID: 11534
// Function ID: 11535
// Name: SwipeToReplyExperiment
// Dependencies: [11535, 11536, 11537, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11534 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11535 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11536 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11537 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
