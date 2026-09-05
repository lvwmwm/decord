// Module ID: 11463
// Function ID: 11464
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [11464, 11465, 11466, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11463 (useIsMessageSwipeActionsEnabled)
import set from "set" /* 2 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11464 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11465 */;

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
