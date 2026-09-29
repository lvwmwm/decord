// Module ID: 11749
// Function ID: 11750
// Name: SwipeToReplyExperiment
// Dependencies: [11750, 11751, 11752, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11749 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11750 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11751 */;
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
