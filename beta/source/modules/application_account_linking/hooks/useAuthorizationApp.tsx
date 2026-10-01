// Module ID: 6588
// Function ID: 6589
// Name: useAuthorizationApp
// Dependencies: [19, 5063, 2003, 1349, 1979, 6589, 2]
// Exports: getAuthorizationApp, useAuthorizationApp

// Module 6588 (useAuthorizationApp)
import ApplicationConstants from "ApplicationConstants" /* 1349 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import ApplicationRecord from "ApplicationRecord" /* 2003 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ApplicationTypes = ApplicationConstants.ApplicationTypes;
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export const getAuthorizationApp = function getAuthorizationApp(type) {
  if (null == type) {
    return null;
  } else if (type.type !== ApplicationTypes.GAME) {
    return type;
  } else {
    const linkedGames = type.linkedGames;
    let found;
    if (linkedGames != null) {
      found = linkedGames.find((type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL);
    }
    let application;
    if (found != null) {
      application = found.application;
    }
    if (application == null) {
      let id;
      const getApplication = ApplicationStore.getApplication;
      if (found != null) {
        id = found.id;
      }
      application = getApplication(id);
    }
    if (application == null) {
      application = null;
    }
    return application;
  }
};
export const useAuthorizationApp = function useAuthorizationApp(getOfficialApplicationId) {
  let getOrFetchApplication;
  _require = getOfficialApplicationId;
  let officialApplicationId;
  if (null != getOfficialApplicationId) {
    let tmp2 = ApplicationRecord;
    if (!(getOfficialApplicationId instanceof ApplicationRecord)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  const obj = require("useGetOrFetchApplications");
  getOrFetchApplication = obj.useGetOrFetchApplication(officialApplicationId);
  const items = [getOfficialApplicationId, getOrFetchApplication];
  return react.useMemo(() => {
    let tmp2 = null;
    if (null != getOfficialApplicationId) {
      let tmp4;
      if (getOfficialApplicationId instanceof ApplicationRecord) {
        let tmp5 = null;
        if (null != getOfficialApplicationId) {
          tmp5 = tmp;
          if (getOfficialApplicationId.type === ApplicationTypes.GAME) {
            const linkedGames = tmp.linkedGames;
            let found;
            if (linkedGames != null) {
              found = linkedGames.find((type) => type.type === getOfficialApplicationId(getOrFetchApplication[4]).GameLinkTypes.OFFICIAL);
            }
            let application;
            if (found != null) {
              application = found.application;
            }
            if (application == null) {
              let id;
              const getApplication = ApplicationStore.getApplication;
              if (found != null) {
                id = found.id;
              }
              application = getApplication(id);
            }
            if (application == null) {
              application = null;
            }
            tmp5 = application;
          }
        }
        tmp4 = tmp5;
      } else {
        tmp4 = getOrFetchApplication;
        if (getOrFetchApplication == null) {
          tmp4 = null;
        }
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }, items);
};
