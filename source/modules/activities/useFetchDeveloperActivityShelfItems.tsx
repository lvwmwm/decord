// Module ID: 11267
// Function ID: 87698
// Name: useFetchDeveloperActivityShelfItems
// Dependencies: [31, 7370, 10546, 3803, 566, 10515, 2]
// Exports: useFetchDeveloperActivityShelfItems

// Module 11267 (useFetchDeveloperActivityShelfItems)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DevShelfFetchState } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("isActivitiesAllowed").fileFinishedImporting("modules/activities/useFetchDeveloperActivityShelfItems.tsx");

export const useFetchDeveloperActivityShelfItems = function useFetchDeveloperActivityShelfItems() {
  isActivitiesEnabledForCurrentPlatform = isActivitiesEnabledForCurrentPlatform(setting[2]).useIsActivitiesEnabledForCurrentPlatform();
  const DeveloperMode = isActivitiesEnabledForCurrentPlatform(setting[3]).DeveloperMode;
  setting = DeveloperMode.getSetting();
  let obj = isActivitiesEnabledForCurrentPlatform(setting[2]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = isActivitiesEnabledForCurrentPlatform(setting[4]).useStateFromStores(items, () => outer1_3.getFetchState(), []);
  const items1 = [isActivitiesEnabledForCurrentPlatform, stateFromStores, setting];
  const effect = stateFromStores.useEffect(() => {
    let tmp = isActivitiesEnabledForCurrentPlatform;
    if (isActivitiesEnabledForCurrentPlatform) {
      tmp = setting;
    }
    if (tmp) {
      tmp = stateFromStores === outer1_4.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = isActivitiesEnabledForCurrentPlatform(setting[5]).fetchDeveloperApplications();
      const obj = isActivitiesEnabledForCurrentPlatform(setting[5]);
    }
  }, items1);
  return null;
};
