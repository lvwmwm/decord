// Module ID: 9940
// Function ID: 9941
// Name: useFrecencySettings
// Dependencies: [19, 1340, 1355, 589, 2]
// Exports: useFrecencySettings

// Module 9940 (useFrecencySettings)
import noop from "noop";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";

const require = arg1;
const result = require("updateUserGuildSettings").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings(flag2) {
  let flag = flag2;
  if (flag2 === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = React.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = flag(outer1_1[2]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [handleConnectionClosedOrResumed];
  return flag(589).useStateFromStores(items1, () => obj.frecencyWithoutFetchingLatest);
};
