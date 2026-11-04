// Module ID: 11723
// Function ID: 11724
// Name: SwipeToReplyExperiment
// Dependencies: [11724, 11725, 11726, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11723 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11724 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11725 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11726 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
