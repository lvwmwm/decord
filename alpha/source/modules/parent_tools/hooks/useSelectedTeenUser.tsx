// Module ID: 16072
// Function ID: 16073
// Name: useSelectedTeenUser
// Dependencies: [1386, 8218, 8215, 9017, 563, 2]
// Exports: useHasLoadedSettingsForTeen, useSelectedTeenUser, useShouldLoadSettingsForSelectedTeenUser, useTeenUserForId

// Module 16072 (useSelectedTeenUser)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 9017 */;
import UserStore from "UserStore" /* 1386 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 8218 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export function useSelectedTeenUser() {
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
}
export function useTeenUserForId(gifterUserId) {
  _require = gifterUserId;
  const items = [UserStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    const user = UserStore.getUser(gifterUserId);
    return null != user ? user : undefined;
  });
}
export function useShouldLoadSettingsForSelectedTeenUser() {
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
}
export function useHasLoadedSettingsForTeen(id1) {
  _require = id1;
  const items = [FamilyCenterControlledSettingsStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    const hasSettingsForUserResult = null != id1 && FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
    return hasSettingsForUserResult;
  });
}
