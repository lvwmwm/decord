// Module ID: 11732
// Function ID: 11733
// Name: SwipeToReplyExperiment
// Dependencies: [11733, 11734, 11735, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11732 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11733 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11734 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11735 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
