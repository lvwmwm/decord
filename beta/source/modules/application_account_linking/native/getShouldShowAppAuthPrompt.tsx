// Module ID: 12197
// Function ID: 12198
// Name: getShouldShowAppAuthPrompt
// Dependencies: [6825, 7523, 7012, 2]
// Exports: getShouldShowAppAuthPrompt

// Module 12197 (getShouldShowAppAuthPrompt)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6825 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7012 */;
import useAuthorizationApp from "useAuthorizationApp" /* 7523 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export function getShouldShowAppAuthPrompt(application1) {
  if (null == application1) {
    return false;
  } else {
    const obj3 = useAuthorizationApp;
    const authorizationApp = obj3.getAuthorizationApp(application1);
    if (null == authorizationApp) {
      return false;
    } else {
      let prop;
      if (authorizationApp != null) {
        prop = authorizationApp.connectionEntrypointUrl;
      }
      if (null != prop) {
        let parentId;
        if (authorizationApp != null) {
          parentId = authorizationApp.parentId;
        }
        if (parentId == null) {
          let id;
          if (authorizationApp != null) {
            id = authorizationApp.id;
          }
          parentId = id;
        }
        let tmp4 = null != parentId;
        if (tmp4) {
          let flag2;
          if (AuthorizedAppsStore.getFetchStateForApplication(parentId) === FetchState.NOT_FETCHED) {
            const items = [parentId];
            const obj2 = AuthorizedAppsActionCreatorsDefault;
            const response = obj2.fetch(items);
            flag2 = false;
          } else {
            flag2 = !(AuthorizedAppsStore.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != AuthorizedAppsStore.getNewestTokenForApplication(parentId));
            AuthorizedAppsStore.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != AuthorizedAppsStore.getNewestTokenForApplication(parentId);
          }
          tmp4 = flag2;
        }
        return tmp4;
      } else {
        return false;
      }
    }
  }
}
