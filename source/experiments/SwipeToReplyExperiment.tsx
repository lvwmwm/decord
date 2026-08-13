// Module ID: 10402
// Function ID: 10403
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: [10403, 10404, 10405, 2]
// Exports: useIsMessageSwipeActionsEnabled

// Module 10402 (useIsMessageSwipeActionsEnabled)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";

const result = require("useIsSwipeToMemberListEnabled").fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = importDefault(10404)() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
