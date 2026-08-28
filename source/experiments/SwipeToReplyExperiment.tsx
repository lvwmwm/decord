// Module ID: 11001
// Function ID: 11002
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [11002, 11003, 11004, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11001 (useIsMessageSwipeActionsEnabled)
import set from "set" /* 2 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11002 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11003 */;

const LaunchPadTypes = LAUNCH_PAD_SPRING_CONFIG.LaunchPadTypes;
const result = set.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = useLaunchPadTypeDefault() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
