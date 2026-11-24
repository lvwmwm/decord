// Module ID: 11810
// Function ID: 11811
// Name: SwipeToReplyExperiment
// Dependencies: [11811, 11812, 11813, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11810 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11811 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11812 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11813 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
