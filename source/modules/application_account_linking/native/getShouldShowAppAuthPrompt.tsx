// Module ID: 10905
// Function ID: 84744
// Name: getShouldShowAppAuthPrompt
// Dependencies: []
// Exports: getShouldShowAppAuthPrompt

// Module 10905 (getShouldShowAppAuthPrompt)
let closure_3 = importDefault(dependencyMap[0]);
const FetchState = arg1(dependencyMap[0]).FetchState;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/application_account_linking/native/getShouldShowAppAuthPrompt.tsx");

export const getShouldShowAppAuthPrompt = function getShouldShowAppAuthPrompt(applicationFromMessage) {
  if (null == applicationFromMessage) {
    return false;
  } else {
    const authorizationApp = arg1(dependencyMap[1]).getAuthorizationApp(applicationFromMessage);
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
          const response = importDefault(dependencyMap[2]).fetch(items);
          let flag2 = false;
          const obj = importDefault(dependencyMap[2]);
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
    const obj2 = arg1(dependencyMap[1]);
  }
};
