// Module ID: 11176
// Function ID: 11177
// Name: SwipeToReplyExperiment
// Dependencies: [11177, 558, 11178, 11179, 2]

// Module 11176 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11177 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11178 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11179 */;
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
