// Module ID: 10799
// Function ID: 10800
// Name: getShouldShowAppAuthPrompt
// Dependencies: [6796, 6856, 6859, 2]
// Exports: getShouldShowAppAuthPrompt

// Module 10799 (getShouldShowAppAuthPrompt)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6796 */;
import useAuthorizationApp from "useAuthorizationApp" /* 6856 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6859 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(application1) {
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
};
