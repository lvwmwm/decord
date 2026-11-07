// Module ID: 11680
// Function ID: 11681
// Name: SwipeToReplyExperiment
// Dependencies: [11681, 11682, 11683, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11680 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11681 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11682 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11683 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
