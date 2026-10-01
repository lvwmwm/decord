// Module ID: 11624
// Function ID: 11625
// Name: useDelayedSwapToActivityActionLeave
// Dependencies: [32, 19, 11539, 2]
// Exports: useDelayedSwapToActivityActionLeave

// Module 11624 (useDelayedSwapToActivityActionLeave)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = function useDelayedSwapToActivityActionLeave(activityAction) {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(activityAction);
  const items = [activityAction];
  const layoutEffect = react.useLayoutEffect(() => {
    let closure_0;
    const tmp = activityAction;
    if (activityAction === activityAction(closure_1[2]).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      activityAction = setTimeout(() => closure_1_1(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      closure_1(tmp);
    }
  }, items);
  return first;
};
