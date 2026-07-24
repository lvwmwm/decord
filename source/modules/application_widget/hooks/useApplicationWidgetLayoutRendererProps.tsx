// Module ID: 12119
// Function ID: 94936
// Name: useApplicationWidgetLayoutRendererProps
// Dependencies: [57, 31, 12120, 12121, 1921, 12122, 566, 12123, 12026, 1327, 12126, 2]
// Exports: default

// Module 12119 (useApplicationWidgetLayoutRendererProps)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

const require = arg1;
let closure_9 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx");

export default function useApplicationWidgetLayoutRendererProps(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  let obj = _require(stateFromStores[5]);
  const userApplicationIdentities = obj.useUserApplicationIdentities(arg0);
  let items = [closure_6];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => outer1_6.getUserIdentityByApplication(closure_0, closure_1));
  const obj2 = _require(stateFromStores[6]);
  const items1 = [closure_8];
  const items2 = [arg1];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items1, () => outer1_8.locale);
  const memo = React.useMemo(() => {
    const items = [closure_1];
    return items;
  }, items2);
  const first = stateFromStores3(importDefault(stateFromStores[7])(memo), 1)[0];
  let profile;
  if (null != stateFromStores) {
    profile = stateFromStores.profile;
  }
  const items3 = [profile];
  const memo1 = React.useMemo(() => {
    let profile;
    if (null != stateFromStores) {
      profile = stateFromStores.profile;
    }
    let tmp3;
    if (null != profile) {
      tmp3 = profile;
    }
    return callback(stateFromStores[8]).resolvedValuesFromUserApplicationIdentityProfile(tmp3);
  }, items3);
  const obj3 = _require(stateFromStores[6]);
  const items4 = [closure_6];
  const stateFromStores2 = _require(stateFromStores[6]).useStateFromStores(items4, () => outer1_6.getFetchState(closure_0) !== outer1_7.FETCHED);
  const obj4 = _require(stateFromStores[6]);
  const items5 = [_isNativeReflectConstruct];
  stateFromStores3 = _require(stateFromStores[6]).useStateFromStores(items5, () => outer1_5.getAssets(closure_1));
  const items6 = [stateFromStores3];
  const items7 = [arg1];
  const memo2 = React.useMemo(() => {
    const values = Object.values(null != stateFromStores3 ? stateFromStores3 : {});
    return values.filter(callback(stateFromStores[9]).isNotNullish);
  }, items6);
  obj = { locale: stateFromStores1 };
  let surfaces;
  const callback = React.useCallback((metadata) => callback(stateFromStores[10]).getApplicationAssetUrl(closure_1, metadata, metadata.metadata.width), items7);
  if (null != first) {
    surfaces = first.surfaces;
  }
  if (null == surfaces) {
    surfaces = {};
  }
  obj.surfaceConfigs = surfaces;
  obj.isLoading = stateFromStores2;
  obj.hasIdentity = null != stateFromStores;
  obj = { data: memo1, applicationAssets: memo2, getApplicationAssetUrl: callback, localizedStrings: closure_9 };
  obj.resolutionContext = obj;
  return obj;
};
