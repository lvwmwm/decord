// Module ID: 11060
// Function ID: 11061
// Name: SwipeToReplyExperiment
// Dependencies: [11061, 558, 11062, 11063, 2]

// Module 11060 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11061 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11062 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11063 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}) : (function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
});
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = tmp2;
