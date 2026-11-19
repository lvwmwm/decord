// Module ID: 11870
// Function ID: 11871
// Name: SwipeToReplyExperiment
// Dependencies: [11871, 11872, 11873, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11870 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11871 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11872 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11873 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
