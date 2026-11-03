// Module ID: 11672
// Function ID: 11673
// Name: SwipeToReplyExperiment
// Dependencies: [11673, 11674, 11675, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11672 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11673 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11674 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11675 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
