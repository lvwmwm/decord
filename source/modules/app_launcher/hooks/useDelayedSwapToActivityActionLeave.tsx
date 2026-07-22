// Module ID: 11255
// Function ID: 87575
// Name: useDelayedSwapToActivityActionLeave
// Dependencies: []
// Exports: useDelayedSwapToActivityActionLeave

// Module 11255 (useDelayedSwapToActivityActionLeave)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = function useDelayedSwapToActivityActionLeave(activityAction) {
  const arg1 = activityAction;
  const tmp = callback(React.useState(activityAction), 2);
  let closure_1 = tmp[1];
  const items = [activityAction];
  const layoutEffect = React.useLayoutEffect(() => {
    if (activityAction === activityAction(callback[2]).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      const activityAction = setTimeout(() => callback(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      callback(activityAction);
    }
  }, items);
  return tmp[0];
};
