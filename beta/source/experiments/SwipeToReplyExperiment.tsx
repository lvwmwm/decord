// Module ID: 11932
// Function ID: 11933
// Name: SwipeToReplyExperiment
// Dependencies: [11933, 11934, 11935, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11932 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11933 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11934 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11935 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
