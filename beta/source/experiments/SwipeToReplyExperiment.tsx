// Module ID: 11937
// Function ID: 11938
// Name: SwipeToReplyExperiment
// Dependencies: [11938, 11939, 11940, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11937 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11938 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11939 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11940 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
