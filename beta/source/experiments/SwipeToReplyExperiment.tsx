// Module ID: 11535
// Function ID: 11536
// Name: SwipeToReplyExperiment
// Dependencies: [11536, 11537, 11538, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11535 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11536 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11537 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11538 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
