// Module ID: 10986
// Function ID: 10987
// Name: SwipeToReplyExperiment
// Dependencies: [10987, 558, 10988, 10989, 2]

// Module 10986 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 10987 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 10988 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 10989 */;
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
