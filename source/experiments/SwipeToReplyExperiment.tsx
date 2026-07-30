// Module ID: 10474
// Function ID: 10475
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [10475, 10476, 10114, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 10474 (useIsMessageSwipeActionsEnabled)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("useIsSwipeToMemberListEnabled").fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = importDefault(10476)() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
