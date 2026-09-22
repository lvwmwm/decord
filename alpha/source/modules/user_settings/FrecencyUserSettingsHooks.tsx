// Module ID: 10636
// Function ID: 10637
// Name: FrecencyUserSettingsHooks
// Dependencies: [19, 1220, 2025, 504, 2]
// Exports: useFrecencySettings

// Module 10636 (FrecencyUserSettingsHooks)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2025 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = noop.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [UserSettingsProtoStore];
  return flag(504).useStateFromStores(items1, () => UserSettingsProtoStore.frecencyWithoutFetchingLatest);
};
