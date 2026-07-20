// Module ID: 13666
// Function ID: 103489
// Name: useSelectedTeenUser
// Dependencies: []
// Exports: useSelectedTeenUser, useShouldLoadSettingsForSelectedTeenUser, useTeenUserForId

// Module 13666 (useSelectedTeenUser)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = function useSelectedTeenUser() {
  const callback = importDefault(dependencyMap[3])();
  const items = [closure_5, closure_3];
  return callback(dependencyMap[4]).useStateFromStores(items, () => {
    if (true !== closure_0) {
      return authStore.getCurrentUser();
    } else {
      const selectedTeenId = selectedTeenId.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = authStore.getUser(selectedTeenId);
      }
      return user;
    }
  });
};
export const useTeenUserForId = function useTeenUserForId(gifterUserId) {
  const arg1 = gifterUserId;
  const items = [closure_3];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const user = user.getUser(arg0);
    return null != user ? user : undefined;
  });
};
export const useShouldLoadSettingsForSelectedTeenUser = function useShouldLoadSettingsForSelectedTeenUser() {
  const selectedTeenId = selectedTeenId.getSelectedTeenId();
  const arg1 = selectedTeenId;
  const items = [closure_4];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    const obj = {};
    let hasSettingsForUserResult = null != selectedTeenId;
    if (hasSettingsForUserResult) {
      hasSettingsForUserResult = closure_4.hasSettingsForUser(selectedTeenId);
    }
    obj.hasLoadedSettings = hasSettingsForUserResult;
    obj.isLoading = closure_4.isLoading;
    return obj;
  });
  let tmp4 = null !== selectedTeenId;
  if (tmp4) {
    tmp4 = !stateFromStoresObject.hasLoadedSettings && !tmp3;
    const tmp5 = !stateFromStoresObject.hasLoadedSettings && !tmp3;
  }
  return tmp4;
};
