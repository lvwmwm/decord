// Module ID: 11812
// Function ID: 11813
// Name: SwipeToReplyExperiment
// Dependencies: [11813, 11814, 11815, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11812 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11813 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11814 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11815 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
