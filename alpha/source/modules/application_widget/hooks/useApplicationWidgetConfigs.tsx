// Module ID: 13344
// Function ID: 13345
// Name: useApplicationWidgetConfigs
// Dependencies: [19, 11429, 558, 576, 2041, 504, 1388, 11428, 2]

// Module 13344 (useApplicationWidgetConfigs)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 11428 */;
import ApplicationWidgetConfigStore2 from "ApplicationWidgetConfigStore" /* 11429 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp8;

const FetchState = ApplicationWidgetConfigStore2.FetchState;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useApplicationWidgetConfigs(arg0) {
  let closure_0;
  let setting;
  let stateFromStores1;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(21);
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = stateFromStores1;
    const items = [stateFromStores1];
    const fn = function n() {
      return stateFromStores1.getFeaturedFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(setting[5]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp10 = S;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult4 = tmp(setting[5]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores1];
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class C {
      constructor() {
        return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
      }
    }
    cResult[5] = arg0;
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[6] = C;
    tmp15 = C;
  } else {
    class C {
      constructor() {
        return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
      }
    }
  }
  const tmpResult5 = tmp(setting[5]);
  const stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp13, tmp15);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
      }
    }
    const items3 = [stateFromStores1];
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[7] = items3;
    tmp17 = items3;
  } else {
    class C {
      constructor() {
        return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
      }
    }
  }
  if (cResult[8] !== arg0) {
    class C {
      constructor() {
        return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
      }
    }
    cResult[8] = arg0;
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[9] = tmp19;
    tmp18 = tmp19;
  } else {
    class C {
      constructor() {
        return closure_0.filter((item) => fetchState.getFetchState(item) === constants.NOT_FETCHED);
      }
    }
  }
  const tmpResult6 = tmp(setting[5]);
  const stateFromStoresArray1 = tmpResult6.useStateFromStoresArray(tmp17, tmp18);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    const items4 = [];
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[11] = items4;
    tmp22 = items4;
    tmp21 = N;
  } else {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    tmp22 = cResult[11];
  }
  const effect = stateFromStores.useEffect(tmp21, tmp22);
  const obj6 = stateFromStores;
  if (cResult[12] !== setting) {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    const items5 = [setting];
    class S {
      constructor() {
        return stateFromStores1.getDeveloperFetchState();
      }
    }
    cResult[12] = setting;
    cResult[13] = tmp26;
    cResult[14] = items5;
    tmp25 = items5;
    tmp24 = tmp26;
  } else {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
    tmp25 = cResult[14];
  }
  const effect1 = obj6.useEffect(tmp24, tmp25);
  if (cResult[15] === stateFromStores1) {
    class N {
      constructor() {
        obj = closure_0(closure_1[7]);
        featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
        catchPromise = featuredWidgetConfigs.catch(() => {

        });
        return;
      }
    }
  }
  class W {
    constructor() {
      tmp2 = FetchState;
      if (closure_2 !== FetchState.NOT_FETCHED) {
        if (tmp !== tmp2.FETCHING) {
          tmp3 = closure_1;
          if (!tmp3) {
            tmp5 = closure_4;
            tmp6 = closure_4;
            for (const item10012 of closure_4) {
              tmp7 = closure_0;
              tmp8 = closure_1;
              obj = closure_0(closure_1[7]);
              widgetConfigs = obj.fetchWidgetConfigs(item10012);
              catchPromise = widgetConfigs.catch(() => {

              });
              continue;
            }
          } else if (closure_3 !== tmp2.NOT_FETCHED) {
          }
        }
      }
      return;
    }
  }
  const items6 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  cResult[15] = stateFromStores1;
  cResult[16] = stateFromStores;
  cResult[17] = stateFromStoresArray;
  cResult[18] = setting;
  cResult[19] = W;
  cResult[20] = items6;
}) : (function useApplicationWidgetConfigs(arg0) {
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
    const obj = closure_0(setting[7]);
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
});
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetConfigs.tsx");

export default tmp2;
