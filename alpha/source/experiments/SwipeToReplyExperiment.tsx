// Module ID: 11257
// Function ID: 11258
// Name: SwipeToReplyExperiment
// Dependencies: [11258, 558, 11259, 11260, 2]

// Module 11257 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11258 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11259 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11260 */;
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
