// Module ID: 11589
// Function ID: 11590
// Name: SwipeToReplyExperiment
// Dependencies: [11590, 558, 11591, 11592, 2]

// Module 11589 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11590 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11591 */;
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
