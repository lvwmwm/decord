// Module ID: 9832
// Function ID: 9833
// Name: FrecencyUserSettingsHooks
// Dependencies: [19, 1220, 2026, 504, 2]
// Exports: useFrecencySettings

// Module 9832 (FrecencyUserSettingsHooks)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2026 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = react.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [UserSettingsProtoStore];
  const obj = flag(504);
  return obj.useStateFromStores(items1, () => UserSettingsProtoStore.frecencyWithoutFetchingLatest);
};
