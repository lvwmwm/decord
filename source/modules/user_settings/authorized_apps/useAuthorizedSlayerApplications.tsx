// Module ID: 14583
// Function ID: 111239
// Name: useAuthorizedSlayerApplications
// Dependencies: [31, 5066, 566, 10882, 5470, 2]
// Exports: default

// Module 14583 (useAuthorizedSlayerApplications)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default function useAuthorizedSlayerApplications(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = _require(stateFromStores1[2]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getFetchState());
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = _require(stateFromStores1[2]).useStateFromStores(items1, () => {
    if (closure_0) {
      let newestTokensForNonChildrenApplications = obj.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = obj.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const memo = React.useMemo(() => {
    if (null == stateFromStores1) {
      let items = [];
    } else {
      const found = stateFromStores1.filter((application) => callback(stateFromStores1[3]).isSocialLayerSDKAuthorization(application.application, application.scopes));
      items = found.map((application) => application.application);
    }
    return items;
  }, items2);
  const effect = React.useEffect(() => {
    if (!callback) {
      const response = callback(stateFromStores1[4]).fetch();
      const obj = callback(stateFromStores1[4]);
    }
  }, items3);
  obj = {};
  let tmp4 = stateFromStores !== FetchState.FETCHED;
  if (tmp4) {
    let tmp6 = null == stateFromStores1;
    if (!tmp6) {
      tmp6 = 0 === stateFromStores1.length;
    }
    tmp4 = tmp6;
  }
  obj.showLoadingIndicator = tmp4;
  obj.slayerSdkApplications = memo;
  return obj;
};
