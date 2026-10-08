// Module ID: 13197
// Function ID: 13198
// Name: useApplicationWidgetLayoutRendererProps
// Dependencies: [32, 19, 13198, 13199, 2128, 558, 576, 13200, 504, 13201, 13102, 1387, 13202, 2]

// Module 13197 (useApplicationWidgetLayoutRendererProps)
import GlobalUtils from "GlobalUtils" /* 1387 */;
import _mod13102 from "module_13102" /* 13102 */;
import UserApplicationIdentityStore2 from "UserApplicationIdentityStore" /* 13199 */;
import ApplicationAssetV2Utils from "ApplicationAssetV2Utils" /* 13202 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationAssetsV2Store from "ApplicationAssetsV2Store" /* 13198 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserApplicationIdentityStore = UserApplicationIdentityStore2;
let _require, importDefault;

const FetchState = UserApplicationIdentityStore2.FetchState;
const localizedStrings = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let locale;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(34);
  const obj2 = require("UserApplicationIdentityActionCreators");
  const userApplicationIdentities = obj2.useUserApplicationIdentities(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserApplicationIdentityStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp7;
    let tmp10;
    let tmp9;
    let tmp13;
    let tmp20;
    let tmp22;
    let tmp24;
    let tmp26;
    let tmp27;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(stateFromStores[8]);
    stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [LocaleStore];
      const fn = function y() {
        return locale.locale;
      };
      cResult[4] = items1;
      cResult[5] = fn;
      tmp10 = fn;
      tmp9 = items1;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const tmpResult4 = tmp(stateFromStores[8]);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
    if (cResult[6] !== arg1) {
      const items2 = [arg1];
      cResult[6] = arg1;
      cResult[7] = items2;
      tmp13 = items2;
    } else {
      tmp13 = cResult[7];
    }
    const first1 = _slicedToArray(require("useApplicationWidgetConfigs")(tmp13), 1)[0];
    if (stateFromStores != null) {
      let profile = stateFromStores.profile;
    }
    class S {
      constructor() {
        return UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, closure_1);
      }
    }
    if (cResult[10] !== tmp19) {
      const tmp19Result = tmp19();
      cResult[10] = tmp19;
      cResult[11] = tmp19Result;
      tmp20 = tmp19Result;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [UserApplicationIdentityStore];
      cResult[12] = items3;
      tmp22 = items3;
    } else {
      tmp22 = cResult[12];
    }
    if (cResult[13] !== arg0) {
      class L {
        constructor() {
          return UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED;
        }
      }
      cResult[13] = arg0;
      cResult[14] = L;
      tmp24 = L;
    } else {
      class L {
        constructor() {
          return UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED;
        }
      }
    }
    const tmpResult5 = tmp(stateFromStores[8]);
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp22, tmp24);
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED;
        }
      }
      const items4 = [ApplicationAssetsV2Store];
      cResult[15] = items4;
      tmp26 = items4;
    } else {
      class L {
        constructor() {
          return UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED;
        }
      }
    }
    if (cResult[16] !== arg1) {
      class R {
        constructor() {
          return ApplicationAssetsV2Store.getAssets(closure_1);
        }
      }
      cResult[16] = arg1;
      cResult[17] = R;
      tmp27 = R;
    } else {
      class R {
        constructor() {
          return ApplicationAssetsV2Store.getAssets(closure_1);
        }
      }
    }
    const tmpResult6 = tmp(stateFromStores[8]);
    const stateFromStores3 = tmpResult6.useStateFromStores(tmp26, tmp27);
    if (cResult[18] !== stateFromStores3) {
      class R {
        constructor() {
          return ApplicationAssetsV2Store.getAssets(closure_1);
        }
      }
      const _Object = Object;
      if (stateFromStores3 == null) {
        class R {
          constructor() {
            return ApplicationAssetsV2Store.getAssets(closure_1);
          }
        }
      }
      const values2 = values(tmp30);
      const found = values2.filter(tmp(tmp2[11]).isNotNullish);
      cResult[18] = stateFromStores3;
      cResult[19] = found;
    } else {
      class R {
        constructor() {
          return ApplicationAssetsV2Store.getAssets(closure_1);
        }
      }
    }
    if (cResult[20] !== arg1) {
      class O {
        constructor(metadata) {
          const obj = ApplicationAssetV2Utils;
          return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
        }
      }
      cResult[20] = arg1;
      cResult[21] = O;
    } else {
      class O {
        constructor(metadata) {
          const obj = ApplicationAssetV2Utils;
          return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
        }
      }
    }
    const tmp33 = cResult[22];
    if (first1 != null) {
      class O {
        constructor(metadata) {
          const obj = ApplicationAssetV2Utils;
          return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
        }
      }
    }
    if (tmp33 !== undefined) {
      class O {
        constructor(metadata) {
          const obj = ApplicationAssetV2Utils;
          return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
        }
      }
      if (first1 != null) {
        class O {
          constructor(metadata) {
            const obj = ApplicationAssetV2Utils;
            return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
          }
        }
      }
      if (tmp36 == null) {
        class O {
          constructor(metadata) {
            const obj = ApplicationAssetV2Utils;
            return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
          }
        }
      }
      if (first1 != null) {
        class O {
          constructor(metadata) {
            const obj = ApplicationAssetV2Utils;
            return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
          }
        }
      }
      cResult[22] = undefined;
      cResult[23] = tmp36;
    } else {
      class O {
        constructor(metadata) {
          const obj = ApplicationAssetV2Utils;
          return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
        }
      }
    }
    if (cResult[24] === tmp29) {
      class O {
        constructor(metadata) {
          const obj = ApplicationAssetV2Utils;
          return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
        }
      }
    }
    const obj3 = { data: tmp20, applicationAssets: tmp29, getApplicationAssetUrl: tmp32, localizedStrings };
    cResult[24] = tmp29;
    cResult[25] = tmp32;
    cResult[26] = tmp20;
    cResult[27] = obj3;
  }
  class S {
    constructor() {
      return UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, closure_1);
    }
  }
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = S;
  tmp7 = S;
}) : (function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  let closure_0;
  let closure_1;
  let locale;
  let stateFromStores;
  let stateFromStores3;
  let surfaces;
  _require = arg0;
  importDefault = arg1;
  const tmp = _require;
  let obj = require("UserApplicationIdentityActionCreators");
  const userApplicationIdentities = obj.useUserApplicationIdentities(arg0);
  let items = [UserApplicationIdentityStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, closure_1));
  const items1 = [LocaleStore];
  const items2 = [arg1];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => locale.locale);
  const memo = react.useMemo(() => {
    const items = [closure_1];
    return items;
  }, items2);
  const first = stateFromStores3(require("useApplicationWidgetConfigs")(memo), 1)[0];
  let profile;
  const useMemo = react.useMemo;
  const tmp4 = UserApplicationIdentityStore;
  if (stateFromStores != null) {
    profile = stateFromStores.profile;
  }
  const items3 = [profile];
  const memo1 = useMemo(() => {
    let profile;
    const resolvedValuesFromUserApplicationIdentityProfile = _mod13102.resolvedValuesFromUserApplicationIdentityProfile;
    _mod13102;
    if (stateFromStores != null) {
      profile = stateFromStores.profile;
    }
    return resolvedValuesFromUserApplicationIdentityProfile(profile);
  }, items3);
  const items4 = [tmp4];
  const tmpResult = tmp(stateFromStores[8]);
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED);
  const items5 = [ApplicationAssetsV2Store];
  const tmpResult2 = tmp(stateFromStores[8]);
  stateFromStores3 = tmpResult2.useStateFromStores(items5, () => ApplicationAssetsV2Store.getAssets(closure_1));
  const items6 = [stateFromStores3];
  const items7 = [arg1];
  const memo2 = obj4.useMemo(() => {
    let obj = stateFromStores3;
    const _Object = Object;
    if (stateFromStores3 == null) {
      obj = {};
    }
    const values2 = values(obj);
    return values2.filter(GlobalUtils.isNotNullish);
  }, items6);
  const obj5 = { locale: stateFromStores1, surfaceConfigs: surfaces, isLoading: stateFromStores2, hasIdentity: null != stateFromStores, resolutionContext: obj6 };
  surfaces = undefined;
  const callback = obj4.useCallback((metadata) => {
    const obj = ApplicationAssetV2Utils;
    return obj.getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width);
  }, items7);
  if (first != null) {
    surfaces = first.surfaces;
  }
  if (surfaces == null) {
    surfaces = {};
  }
  return obj5;
});
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx");

export default tmp2;
