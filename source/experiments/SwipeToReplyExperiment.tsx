// Module ID: 10359
// Function ID: 10360
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [10360, 10361, 10362, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 10359 (useIsMessageSwipeActionsEnabled)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("useIsSwipeToMemberListEnabled").fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = importDefault(10361)() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
