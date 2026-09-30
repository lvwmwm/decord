// Module ID: 11206
// Function ID: 11207
// Name: SwipeToReplyExperiment
// Dependencies: [11207, 11208, 11209, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11206 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11207 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11208 */;
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
