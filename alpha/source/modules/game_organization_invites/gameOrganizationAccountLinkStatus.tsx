// Module ID: 13181
// Function ID: 13182
// Name: gameOrganizationAccountLinkStatus
// Dependencies: [2038, 7276, 7329, 504, 2]
// Exports: useGameOrganizationAccountLinkStatus

// Module 13181 (gameOrganizationAccountLinkStatus)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7276 */;
import useAuthorizationApp from "useAuthorizationApp" /* 7329 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
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
const result = size.fileFinishedImporting("modules/game_organization_invites/gameOrganizationAccountLinkStatus.tsx");

export { getGameOrganizationAccountLinkStatus };
export function useGameOrganizationAccountLinkStatus(id) {
  _require = id;
  const items = [ApplicationStore, AuthorizedAppsStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let str = "loading";
    if (null != id) {
      str = getGameOrganizationAccountLinkStatus(tmp, ApplicationStore, AuthorizedAppsStore);
    }
    return str;
  }, items1);
}
