// Module ID: 12665
// Function ID: 12666
// Name: useFetchDeveloperActivityShelfItems
// Dependencies: [19, 5808, 11917, 4966, 504, 11121, 2]
// Exports: useFetchDeveloperActivityShelfItems

// Module 12665 (useFetchDeveloperActivityShelfItems)
import DeveloperActivityShelfStore2 from "DeveloperActivityShelfStore" /* 5808 */;
import fetchDeveloperApplications from "fetchDeveloperApplications" /* 11121 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const DeveloperActivityShelfStore = DeveloperActivityShelfStore2;

const DevShelfFetchState = DeveloperActivityShelfStore2.DevShelfFetchState;
const result = size.fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export function useFetchDeveloperActivityShelfItems() {
  let fetchState;
  let isActivitiesEnabledForCurrentPlatform;
  let setting;
  let obj = isActivitiesEnabledForCurrentPlatform(setting[2]);
  isActivitiesEnabledForCurrentPlatform = obj.useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[3]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  const items = [DeveloperActivityShelfStore];
  const obj2 = isActivitiesEnabledForCurrentPlatform(setting[4]);
  const stateFromStores = obj2.useStateFromStores(items, () => fetchState.getFetchState(), []);
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = stateFromStores.useEffect(() => {
    const tmp = isActivitiesEnabledForCurrentPlatform && setting && stateFromStores === DevShelfFetchState.INITIALIZED;
    if (tmp) {
      const obj = fetchDeveloperApplications;
      const developerApplications = obj.fetchDeveloperApplications();
    }
  }, items1);
  return null;
}
