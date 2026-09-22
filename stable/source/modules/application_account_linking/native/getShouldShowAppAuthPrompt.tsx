// Module ID: 11896
// Function ID: 11897
// Name: getShouldShowAppAuthPrompt
// Dependencies: [7210, 7270, 7273, 2]
// Exports: getShouldShowAppAuthPrompt

// Module 11896 (getShouldShowAppAuthPrompt)
import useAuthorizationApp from "useAuthorizationApp" /* 7270 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7273 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7210 */;

require = fn;
const FetchState = fn(7210).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(application1) {
  if (null == application1) {
    return false;
  } else {
    let response = dependencyMap;
    const authorizationApp = useAuthorizationApp.getAuthorizationApp(application1);
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
        if (null == parentId) {
          return tmp4;
        } else if (AuthorizedAppsStore.getFetchStateForApplication(parentId) === FetchState.NOT_FETCHED) {
          const items = [parentId];
          response = AuthorizedAppsActionCreatorsDefault.fetch(items);
          let flag2 = false;
        } else {
          flag2 = !(obj.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != obj.getNewestTokenForApplication(parentId));
          const tmp6 = obj.getFetchStateForApplication(parentId) === tmp5.FETCHED && null != obj.getNewestTokenForApplication(parentId);
        }
      } else {
        return false;
      }
    }
  }
};
