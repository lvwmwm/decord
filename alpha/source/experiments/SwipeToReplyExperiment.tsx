// Module ID: 11001
// Function ID: 11002
// Name: SwipeToReplyExperiment
// Dependencies: [11002, 11003, 11004, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11001 (SwipeToReplyExperiment)
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11003 */;
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
