// Module ID: 8489
// Function ID: 8490
// Name: useApplicationWidgetConfigs
// Dependencies: [19, 8490, 2021, 504, 1370, 8491, 2]
// Exports: default

// Module 8489 (useApplicationWidgetConfigs)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ApplicationWidgetConfigStore2 from "ApplicationWidgetConfigStore" /* 8490 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 8491 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const FetchState = ApplicationWidgetConfigStore2.FetchState;
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetConfigs.tsx");

export default function useApplicationWidgetConfigs(arg0) {
  let closure_0;
  let setting;
  let stateFromStores1;
  _require = arg0;
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  let obj = require("get initialized");
  const items = [stateFromStores1];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores1.getFeaturedFetchState());
  const items1 = [stateFromStores1];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores1.getDeveloperFetchState());
  const items2 = [stateFromStores1];
  const obj3 = require("get initialized");
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    let fetchState;
    return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
  });
  const items3 = [stateFromStores1];
  const obj4 = require("get initialized");
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items3, () => {
    let config;
    const mapped = closure_0.map((item) => config.getConfig(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const effect = stateFromStores.useEffect(() => {
    const obj = closure_0(setting[5]);
    const featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {

    });
  }, []);
  const items4 = [setting];
  const effect1 = stateFromStores.useEffect(() => {
    const tmp = setting;
    if (tmp) {
      const obj = ApplicationWidgetConfigActions;
      const developerWidgetConfigs = obj.fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {

      });
    }
  }, items4);
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  const effect2 = stateFromStores.useEffect(() => {
    if (stateFromStores !== FetchState.NOT_FETCHED) {
      if (tmp !== FetchState.FETCHING) {
        const tmp3 = setting;
        if (!tmp3) {
          for (const item10012 of stateFromStoresArray) {
            let obj = ApplicationWidgetConfigActions;
            let widgetConfigs = obj.fetchWidgetConfigs(item10012);
            let catchPromise = widgetConfigs.catch(() => {

            });
            continue;
          }
        }
      }
    }
  }, items5);
  return stateFromStoresArray1;
};
