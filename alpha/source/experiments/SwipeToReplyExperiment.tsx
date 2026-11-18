// Module ID: 11892
// Function ID: 11893
// Name: SwipeToReplyExperiment
// Dependencies: [11893, 11894, 11895, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11892 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11893 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11894 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11895 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
