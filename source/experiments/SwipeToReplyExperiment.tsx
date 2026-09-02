// Module ID: 11283
// Function ID: 11284
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [11284, 11285, 11286, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 11283 (useIsMessageSwipeActionsEnabled)
import set from "set" /* 2 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 11284 */;
import useLaunchPadTypeDefault from "useLaunchPadType" /* 11285 */;

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
