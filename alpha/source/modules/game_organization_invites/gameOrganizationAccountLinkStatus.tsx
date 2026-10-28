// Module ID: 12778
// Function ID: 12779
// Name: gameOrganizationAccountLinkStatus
// Dependencies: [2042, 7239, 7292, 558, 576, 504, 2]

// Module 12778 (gameOrganizationAccountLinkStatus)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7239 */;
import useAuthorizationApp from "useAuthorizationApp" /* 7292 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require;

function getGameOrganizationAccountLinkStatus(id, ApplicationStore, AuthorizedAppsStore) {
  let obj = ApplicationStore;
  if (ApplicationStore === undefined) {
    obj = ApplicationStore;
  }
  let obj2 = AuthorizedAppsStore;
  if (AuthorizedAppsStore === undefined) {
    obj2 = AuthorizedAppsStore;
  }
  if (obj.isHydrated(id)) {
    const obj3 = useAuthorizationApp;
    const authorizationApp = obj3.getAuthorizationApp(obj.getApplication(id));
    if (null == authorizationApp) {
      return "link_unavailable";
    } else {
      id = authorizationApp.parentId;
      if (id == null) {
        id = authorizationApp.id;
      }
      let str2 = "loading";
      if (obj2.getFetchStateForApplication(id) === FetchState.FETCHED) {
        let str3 = "linked";
        if (null == obj2.getNewestTokenForApplication(id)) {
          let str4 = "link_unavailable";
          if (null != authorizationApp.connectionEntrypointUrl) {
            str4 = "needs_link";
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    }
  } else {
    let str = "loading";
    if (obj.didFetchingApplicationFail(id)) {
      str = "error";
    }
    return str;
  }
}
const FetchState = AuthorizedAppsStore2.FetchState;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameOrganizationAccountLinkStatus(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore, AuthorizedAppsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let str = "loading";
      if (null != closure_0) {
        str = getGameOrganizationAccountLinkStatus(tmp, ApplicationStore, AuthorizedAppsStore);
      }
      return str;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useGameOrganizationAccountLinkStatus(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ApplicationStore, AuthorizedAppsStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let str = "loading";
    if (null != closure_0) {
      str = getGameOrganizationAccountLinkStatus(tmp, ApplicationStore, AuthorizedAppsStore);
    }
    return str;
  }, items1);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/gameOrganizationAccountLinkStatus.tsx");

export { getGameOrganizationAccountLinkStatus };
export const useGameOrganizationAccountLinkStatus = tmp2;
