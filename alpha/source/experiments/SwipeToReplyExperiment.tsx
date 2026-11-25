// Module ID: 11909
// Function ID: 11910
// Name: SwipeToReplyExperiment
// Dependencies: [11910, 11911, 11912, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11909 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11910 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11911 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11912 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
