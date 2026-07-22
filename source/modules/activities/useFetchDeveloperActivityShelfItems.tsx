// Module ID: 11228
// Function ID: 87408
// Name: useFetchDeveloperActivityShelfItems
// Dependencies: []
// Exports: useFetchDeveloperActivityShelfItems

// Module 11228 (useFetchDeveloperActivityShelfItems)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const DevShelfFetchState = arg1(dependencyMap[1]).DevShelfFetchState;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = function useFetchDeveloperActivityShelfItems() {
  const isActivitiesEnabledForCurrentPlatform = arg1(dependencyMap[2]).useIsActivitiesEnabledForCurrentPlatform();
  const arg1 = isActivitiesEnabledForCurrentPlatform;
  const DeveloperMode = arg1(dependencyMap[3]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const dependencyMap = setting;
  const obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => fetchState.getFetchState(), []);
  const React = stateFromStores;
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = React.useEffect(() => {
    let tmp = isActivitiesEnabledForCurrentPlatform;
    if (isActivitiesEnabledForCurrentPlatform) {
      tmp = setting;
    }
    if (tmp) {
      tmp = stateFromStores === constants.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = isActivitiesEnabledForCurrentPlatform(setting[5]).fetchDeveloperApplications();
      const obj = isActivitiesEnabledForCurrentPlatform(setting[5]);
    }
  }, items1);
  return null;
};
