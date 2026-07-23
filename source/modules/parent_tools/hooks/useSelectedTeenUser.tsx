// Module ID: 13796
// Function ID: 105723
// Name: useSelectedTeenUser
// Dependencies: [1849, 6772, 6769, 7124, 624, 2]
// Exports: useSelectedTeenUser, useShouldLoadSettingsForSelectedTeenUser, useTeenUserForId

// Module 13796 (useSelectedTeenUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = function useSelectedTeenUser() {
  const _require = importDefault(7124)();
  const items = [closure_5, _isNativeReflectConstruct];
  return _require(624).useStateFromStores(items, () => {
    if (true !== closure_0) {
      return outer1_3.getCurrentUser();
    } else {
      const selectedTeenId = outer1_5.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = outer1_3.getUser(selectedTeenId);
      }
      return user;
    }
  });
};
export const useTeenUserForId = function useTeenUserForId(gifterUserId) {
  const _require = gifterUserId;
  const items = [_isNativeReflectConstruct];
  return _require(624).useStateFromStores(items, () => {
    const user = outer1_3.getUser(closure_0);
    return null != user ? user : undefined;
  });
};
export const useShouldLoadSettingsForSelectedTeenUser = function useShouldLoadSettingsForSelectedTeenUser() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  const items = [closure_4];
  const stateFromStoresObject = selectedTeenId(624).useStateFromStoresObject(items, () => {
    const obj = {};
    let hasSettingsForUserResult = null != selectedTeenId;
    if (hasSettingsForUserResult) {
      hasSettingsForUserResult = outer1_4.hasSettingsForUser(selectedTeenId);
    }
    obj.hasLoadedSettings = hasSettingsForUserResult;
    obj.isLoading = outer1_4.isLoading;
    return obj;
  });
  let tmp4 = null !== selectedTeenId;
  if (tmp4) {
    tmp4 = !stateFromStoresObject.hasLoadedSettings && !tmp3;
    const tmp5 = !stateFromStoresObject.hasLoadedSettings && !tmp3;
  }
  return tmp4;
};
