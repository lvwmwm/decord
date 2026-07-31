// Module ID: 10491
// Function ID: 10492
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [10492, 10493, 10131, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 10491 (useIsMessageSwipeActionsEnabled)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("useIsSwipeToMemberListEnabled").fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = importDefault(10493)() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
