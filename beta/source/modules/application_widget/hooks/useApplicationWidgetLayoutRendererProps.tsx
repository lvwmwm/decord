// Module ID: 8485
// Function ID: 8486
// Name: useApplicationWidgetLayoutRendererProps
// Dependencies: [32, 19, 8486, 8487, 2112, 8488, 504, 8489, 8390, 1370, 8493, 2]
// Exports: default

// Module 8485 (useApplicationWidgetLayoutRendererProps)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _mod8390 from "module_8390" /* 8390 */;
import UserApplicationIdentityStore2 from "UserApplicationIdentityStore" /* 8487 */;
import ApplicationAssetV2Utils from "ApplicationAssetV2Utils" /* 8493 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationAssetsV2Store from "ApplicationAssetsV2Store" /* 8486 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserApplicationIdentityStore = UserApplicationIdentityStore2;
let _require, importDefault;

const FetchState = UserApplicationIdentityStore2.FetchState;
const localizedStrings = [];
const result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx");

export default function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
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
    const resolvedValuesFromUserApplicationIdentityProfile = _mod8390.resolvedValuesFromUserApplicationIdentityProfile;
    _mod8390;
    if (stateFromStores != null) {
      profile = stateFromStores.profile;
    }
    return resolvedValuesFromUserApplicationIdentityProfile(profile);
  }, items3);
  const items4 = [tmp4];
  const tmpResult = tmp(stateFromStores[6]);
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => UserApplicationIdentityStore.getFetchState(closure_0) !== FetchState.FETCHED);
  const items5 = [ApplicationAssetsV2Store];
  const tmpResult2 = tmp(stateFromStores[6]);
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
};
