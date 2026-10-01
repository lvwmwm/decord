// Module ID: 14429
// Function ID: 14430
// Name: useSelectedTeenUser
// Dependencies: [1372, 6960, 6957, 8106, 563, 2]
// Exports: useSelectedTeenUser, useShouldLoadSettingsForSelectedTeenUser, useTeenUserForId

// Module 14429 (useSelectedTeenUser)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8106 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 6960 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = function useSelectedTeenUser() {
  let closure_0;
  _require = useIsInAdultAgeGroupDefault();
  const items = [FamilyCenterStore, UserStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    if (true !== closure_0) {
      return UserStore.getCurrentUser();
    } else {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = UserStore.getUser(selectedTeenId);
      }
      return user;
    }
  });
};
export const useTeenUserForId = function useTeenUserForId(gifterUserId) {
  _require = gifterUserId;
  const items = [UserStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    const user = UserStore.getUser(gifterUserId);
    return null != user ? user : undefined;
  });
};
export const useShouldLoadSettingsForSelectedTeenUser = function useShouldLoadSettingsForSelectedTeenUser() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  const items = [FamilyCenterControlledSettingsStore];
  const obj = selectedTeenId(563);
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const hasSettingsForUserResult = null != selectedTeenId && FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
    return { hasLoadedSettings: hasSettingsForUserResult, isLoading: FamilyCenterControlledSettingsStore.isLoading };
  });
  const hasLoadedSettings = stateFromStoresObject.hasLoadedSettings;
  let tmp4 = null !== selectedTeenId;
  if (tmp4) {
    tmp4 = !hasLoadedSettings && !tmp3;
  }
  return tmp4;
};
