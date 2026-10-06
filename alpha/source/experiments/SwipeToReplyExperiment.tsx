// Module ID: 11137
// Function ID: 11138
// Name: SwipeToReplyExperiment
// Dependencies: [11138, 558, 11139, 11140, 2]

// Module 11137 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11138 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11139 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11140 */;
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
