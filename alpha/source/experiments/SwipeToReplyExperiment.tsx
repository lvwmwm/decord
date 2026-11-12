// Module ID: 12306
// Function ID: 12307
// Name: SwipeToReplyExperiment
// Dependencies: [12307, 12308, 12309, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 12306 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 12307 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 12308 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 12309 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}
