// Module ID: 10942
// Function ID: 84982
// Name: getShouldShowAppAuthPrompt
// Dependencies: [5066, 5467, 5470, 2]
// Exports: getShouldShowAppAuthPrompt

// Module 10942 (getShouldShowAppAuthPrompt)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(applicationFromMessage) {
  if (null == applicationFromMessage) {
    return false;
  } else {
    const authorizationApp = require(5467) /* getAuthorizationApp */.getAuthorizationApp(applicationFromMessage);
    if (null == authorizationApp) {
      return false;
    } else {
      let prop;
      if (null != authorizationApp) {
        prop = authorizationApp.connectionEntrypointUrl;
      }
      if (null != prop) {
        let parentId;
        if (null != authorizationApp) {
          parentId = authorizationApp.parentId;
        }
        if (null == parentId) {
          let id;
          if (null != authorizationApp) {
            id = authorizationApp.id;
          }
          parentId = id;
        }
        if (null == parentId) {
          return tmp4;
        } else if (authStore.getFetchStateForApplication(parentId) === FetchState.NOT_FETCHED) {
          const items = [parentId];
          const response = importDefault(5470).fetch(items);
          let flag2 = false;
          const obj = importDefault(5470);
        } else {
          let tmp9 = authStore.getFetchStateForApplication(parentId) === FetchState.FETCHED;
          if (tmp9) {
            tmp9 = null != authStore.getNewestTokenForApplication(parentId);
          }
          flag2 = !tmp9;
        }
      } else {
        return false;
      }
    }
    const obj2 = require(5467) /* getAuthorizationApp */;
  }
};
