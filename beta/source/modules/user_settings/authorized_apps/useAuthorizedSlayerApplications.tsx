// Module ID: 15491
// Function ID: 15492
// Name: useAuthorizedSlayerApplications
// Dependencies: [19, 6528, 504, 11025, 6591, 2]
// Exports: default

// Module 15491 (useAuthorizedSlayerApplications)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6528 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6591 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require;

const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default function useAuthorizedSlayerApplications(arg0, arg1) {
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
        const obj = closure_1_0(stateFromStores1[3]);
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
};
