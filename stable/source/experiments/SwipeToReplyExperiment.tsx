// Module ID: 11079
// Function ID: 11080
// Name: SwipeToReplyExperiment
// Dependencies: [11080, 558, 11081, 11082, 2]

// Module 11079 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11080 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11081 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11082 */;
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
