// Module ID: 10488
// Function ID: 10489
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [10489, 10490, 10491, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 10488 (useIsMessageSwipeActionsEnabled)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("useIsSwipeToMemberListEnabled").fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = importDefault(10490)() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
