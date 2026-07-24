// Module ID: 11294
// Function ID: 87865
// Name: useDelayedSwapToActivityActionLeave
// Dependencies: [57, 31, 11207, 2]
// Exports: useDelayedSwapToActivityActionLeave

// Module 11294 (useDelayedSwapToActivityActionLeave)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("getStaffReleasePhase").fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = function useDelayedSwapToActivityActionLeave(activityAction) {
  let closure_0 = activityAction;
  const tmp = callback(React.useState(activityAction), 2);
  let closure_1 = tmp[1];
  const items = [activityAction];
  const layoutEffect = React.useLayoutEffect(() => {
    if (activityAction === activityAction(11207).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      activityAction = setTimeout(() => outer1_1(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      dependencyMap(activityAction);
    }
  }, items);
  return tmp[0];
};
