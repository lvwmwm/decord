// Module ID: 11625
// Function ID: 11626
// Name: SwipeToReplyExperiment
// Dependencies: [11626, 558, 11627, 11628, 2]

// Module 11625 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11626 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11627 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
}) : (() => {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
});
