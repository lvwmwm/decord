// Module ID: 5467
// Function ID: 46707
// Name: getAuthorizationApp
// Dependencies: []
// Exports: useAuthorizationApp

// Module 5467 (getAuthorizationApp)
function getAuthorizationApp(type) {
  if (null == type) {
    return null;
  } else if (type.type !== ApplicationTypes.GAME) {
    return type;
  } else {
    const linkedGames = type.linkedGames;
    let found;
    if (null != linkedGames) {
      found = linkedGames.find((type) => type.type === callback(closure_1[4]).GameLinkTypes.OFFICIAL);
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
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ApplicationTypes = arg1(dependencyMap[3]).ApplicationTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizationApp.tsx");

export { getAuthorizationApp };
export const useAuthorizationApp = function useAuthorizationApp(getOfficialApplicationId) {
  const arg1 = getOfficialApplicationId;
  let officialApplicationId;
  if (null != getOfficialApplicationId) {
    if (!(getOfficialApplicationId instanceof closure_4)) {
      officialApplicationId = getOfficialApplicationId.getOfficialApplicationId();
    }
  }
  const getOrFetchApplication = arg1(dependencyMap[5]).useGetOrFetchApplication(officialApplicationId);
  const dependencyMap = getOrFetchApplication;
  const items = [getOfficialApplicationId, getOrFetchApplication];
  return React.useMemo(() => {
    if (null == arg0) {
      return null;
    } else if (arg0 instanceof closure_4) {
      let tmp4 = callback(arg0);
    } else {
      tmp4 = null;
      if (null != getOrFetchApplication) {
        tmp4 = getOrFetchApplication;
      }
    }
  }, items);
};
