// Module ID: 9969
// Function ID: 9970
// Name: FrecencyUserSettingsHooks
// Dependencies: [19, 1231, 4622, 504, 2]
// Exports: useFrecencySettings

// Module 9969 (FrecencyUserSettingsHooks)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4622 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export function useFrecencySettings(flag) {
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
}
