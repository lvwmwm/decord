// Module ID: 10869
// Function ID: 10870
// Name: SwipeToReplyExperiment
// Dependencies: [10870, 558, 10871, 10872, 2]

// Module 10869 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 10870 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 10871 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 10872 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
}) : (() => {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  const obj = SwipeToMemberListUtils;
  const tmp2 = !tmp && !obj.useIsSwipeToMemberListEnabled();
  return tmp2;
});
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = tmp2;
