// Module ID: 11711
// Function ID: 11712
// Name: SwipeToReplyExperiment
// Dependencies: [11712, 11713, 11714, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11711 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11712 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11713 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11714 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
