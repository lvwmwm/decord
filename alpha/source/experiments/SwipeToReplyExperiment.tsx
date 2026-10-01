// Module ID: 11210
// Function ID: 11211
// Name: SwipeToReplyExperiment
// Dependencies: [11211, 11212, 11213, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11210 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11211 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11212 */;
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
