// Module ID: 11965
// Function ID: 11966
// Name: SwipeToReplyExperiment
// Dependencies: [11966, 11967, 11968, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11965 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11966 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11967 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11968 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
