// Module ID: 10439
// Function ID: 80573
// Name: useIsMessageSwipeActionsEnabled
// Dependencies: []
// Exports: useIsMessageSwipeActionsEnabled

// Module 10439 (useIsMessageSwipeActionsEnabled)
const LaunchPadTypes = require(dependencyMap[0]).LaunchPadTypes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("experiments/SwipeToReplyExperiment.tsx");

export const useIsMessageSwipeActionsEnabled = function useIsMessageSwipeActionsEnabled() {
  const tmp = importDefault(dependencyMap[1])() === LaunchPadTypes.GESTURE_FULL;
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !obj.useIsSwipeToMemberListEnabled();
  }
  return tmp2;
};
