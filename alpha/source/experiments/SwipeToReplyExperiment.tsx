// Module ID: 10988
// Function ID: 10989
// Name: SwipeToReplyExperiment
// Dependencies: [10989, 10990, 10991, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 10988 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 10989 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 10990 */;
import size from "module_2" /* 2 */;

const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
const result = size.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
