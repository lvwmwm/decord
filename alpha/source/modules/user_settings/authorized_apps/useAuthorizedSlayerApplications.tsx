// Module ID: 16195
// Function ID: 16196
// Name: useAuthorizedSlayerApplications
// Dependencies: [19, 6793, 558, 576, 504, 10650, 6856, 2]

// Module 16195 (useAuthorizedSlayerApplications)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6793 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6856 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, importDefault;

const FetchState = AuthorizedAppsStore2.FetchState;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAuthorizedSlayerApplications(arg0, arg1) {
  let closure_0;
  let closure_1;
  let fetchState;
  let obj2;
  let tmp10;
  let tmp11;
  let tmp18;
  let tmp19;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  importDefault = arg1;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthorizedAppsStore];
    const fn = function p() {
      return fetchState.getFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthorizedAppsStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function h() {
      let newestTokensForNonChildrenApplications;
      if (closure_0) {
        newestTokensForNonChildrenApplications = obj.getNewestTokensForNonChildrenApplications();
      } else {
        newestTokensForNonChildrenApplications = obj.getNewestTokens();
      }
      return newestTokensForNonChildrenApplications;
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
  if (null != stateFromStores1) {
    let tmp13;
    if (cResult[6] !== stateFromStores1) {
      let tmp14;
      let tmp15;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(application) {
            const obj = closure_0(dependencyMap[5]);
            return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
          }
        }
        cResult[8] = F;
        tmp14 = F;
      } else {
        class F {
          constructor(application) {
            const obj = closure_0(dependencyMap[5]);
            return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(application) {
            const obj = closure_0(dependencyMap[5]);
            return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
          }
        }
        cResult[9] = tmp16;
        tmp15 = tmp16;
      } else {
        class F {
          constructor(application) {
            const obj = closure_0(dependencyMap[5]);
            return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
          }
        }
      }
      const found = stateFromStores1.filter(tmp14);
      const mapped = found.map(tmp15);
      cResult[6] = stateFromStores1;
      cResult[7] = mapped;
      tmp13 = mapped;
    } else {
      class F {
        constructor(application) {
          const obj = closure_0(dependencyMap[5]);
          return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
        }
      }
    }
    tmp11 = tmp13;
  } else {
    class F {
      constructor(application) {
        const obj = closure_0(dependencyMap[5]);
        return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
      }
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(application) {
          const obj = closure_0(dependencyMap[5]);
          return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
        }
      }
      cResult[5] = tmp12;
      tmp11 = tmp12;
    } else {
      class F {
        constructor(application) {
          const obj = closure_0(dependencyMap[5]);
          return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
        }
      }
    }
  }
  if (cResult[10] !== arg1) {
    class E {
      constructor() {
        const tmp = closure_1;
        if (!tmp) {
          const obj = AuthorizedAppsActionCreatorsDefault;
          const response = obj.fetch();
        }
      }
    }
    const items2 = [arg1];
    cResult[10] = arg1;
    cResult[11] = E;
    cResult[12] = items2;
    tmp19 = items2;
    tmp18 = E;
  } else {
    class E {
      constructor() {
        const tmp = closure_1;
        if (!tmp) {
          const obj = AuthorizedAppsActionCreatorsDefault;
          const response = obj.fetch();
        }
      }
    }
    tmp19 = cResult[12];
  }
  const effect = react.useEffect(tmp18, tmp19);
  let tmp21 = stateFromStores !== FetchState.FETCHED;
  if (tmp21) {
    class E {
      constructor() {
        const tmp = closure_1;
        if (!tmp) {
          const obj = AuthorizedAppsActionCreatorsDefault;
          const response = obj.fetch();
        }
      }
    }
    if (!tmp22) {
      class E {
        constructor() {
          const tmp = closure_1;
          if (!tmp) {
            const obj = AuthorizedAppsActionCreatorsDefault;
            const response = obj.fetch();
          }
        }
      }
    }
    tmp21 = tmp22;
  }
  if (cResult[13] === tmp11) {
    class E {
      constructor() {
        const tmp = closure_1;
        if (!tmp) {
          const obj = AuthorizedAppsActionCreatorsDefault;
          const response = obj.fetch();
        }
      }
    }
    return obj2;
  }
  obj2 = { showLoadingIndicator: tmp21, slayerSdkApplications: tmp11 };
  cResult[13] = tmp11;
  cResult[14] = tmp21;
  cResult[15] = obj2;
}) : (function useAuthorizedSlayerApplications(arg0, arg1) {
  let closure_0;
  let fetchState;
  let stateFromStores1;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [AuthorizedAppsStore];
  const stateFromStores = obj.useStateFromStores(items, () => fetchState.getFetchState());
  const items1 = [AuthorizedAppsStore];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let newestTokensForNonChildrenApplications;
    if (closure_0) {
      newestTokensForNonChildrenApplications = obj.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = obj.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const slayerSdkApplications = react.useMemo(() => {
    let items;
    const arr = stateFromStores1;
    if (null == stateFromStores1) {
      items = [];
    } else {
      const found = arr.filter((application) => {
        const obj = closure_1_0(stateFromStores1[5]);
        return obj.isSocialLayerSDKAuthorization(application.application, application.scopes);
      });
      items = found.map((application) => application.application);
    }
    return items;
  }, items2);
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items3);
  let showLoadingIndicator = stateFromStores !== FetchState.FETCHED;
  if (showLoadingIndicator) {
    showLoadingIndicator = null == stateFromStores1 || 0 === stateFromStores1.length;
    const tmp6 = null == stateFromStores1 || 0 === stateFromStores1.length;
  }
  return { showLoadingIndicator, slayerSdkApplications };
});
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default tmp2;
