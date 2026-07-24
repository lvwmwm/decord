// Module ID: 5467
// Function ID: 46731
// Name: getAuthorizationApp
// Dependencies: [31, 4167, 4153, 4156, 1881, 5468, 2]
// Exports: useAuthorizationApp

// Module 5467 (getAuthorizationApp)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import { ApplicationTypes } from "ApplicationTypes";

const require = arg1;
function getAuthorizationApp(type) {
  if (null == type) {
    return null;
  } else if (type.type !== ApplicationTypes.GAME) {
    return type;
  } else {
    const linkedGames = type.linkedGames;
    let found;
    if (null != linkedGames) {
      found = linkedGames.find((type) => type.type === outer1_0(outer1_1[4]).GameLinkTypes.OFFICIAL);
    }
    let application;
    if (null != found) {
      application = found.application;
    }
    if (null == application) {
      let id;
      if (null != found) {
        id = found.id;
      }
      application = application.getApplication(id);
    }
    let tmp6 = null;
    if (null != application) {
      tmp6 = application;
    }
    return tmp6;
  }
}
const result = require("_callSuper").fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export { getAuthorizationApp };
export const useAuthorizationApp = function useAuthorizationApp(getOfficialApplicationId) {
  const _require = getOfficialApplicationId;
  let officialApplicationId;
  if (null != getOfficialApplicationId) {
    if (!(getOfficialApplicationId instanceof _callSuper)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  getOrFetchApplication = _require(getOrFetchApplication[5]).useGetOrFetchApplication(officialApplicationId);
  const items = [getOfficialApplicationId, getOrFetchApplication];
  return React.useMemo(() => {
    if (null == closure_0) {
      return null;
    } else if (closure_0 instanceof outer1_4) {
      let tmp4 = outer1_6(closure_0);
    } else {
      tmp4 = null;
      if (null != getOrFetchApplication) {
        tmp4 = getOrFetchApplication;
      }
    }
  }, items);
};
