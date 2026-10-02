// Module ID: 11137
// Function ID: 11138
// Name: getShouldShowAppAuthPrompt
// Dependencies: [6529, 6589, 6592, 2]
// Exports: getShouldShowAppAuthPrompt

// Module 11137 (getShouldShowAppAuthPrompt)
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6529 */;
import useAuthorizationApp from "useAuthorizationApp" /* 6589 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6592 */;
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
