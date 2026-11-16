// Module ID: 12401
// Function ID: 12402
// Name: SwipeToReplyExperiment
// Dependencies: [12402, 12403, 12404, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 12401 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 12402 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 12403 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 12404 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
