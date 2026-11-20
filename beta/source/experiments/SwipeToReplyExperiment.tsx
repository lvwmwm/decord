// Module ID: 12403
// Function ID: 12404
// Name: SwipeToReplyExperiment
// Dependencies: [12404, 12405, 12406, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 12403 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 12404 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 12405 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 12406 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
