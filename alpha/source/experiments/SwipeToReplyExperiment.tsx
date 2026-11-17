// Module ID: 12607
// Function ID: 12608
// Name: SwipeToReplyExperiment
// Dependencies: [12608, 12609, 12610, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 12607 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 12608 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 12609 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 12610 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
