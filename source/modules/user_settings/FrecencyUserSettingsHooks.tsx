// Module ID: 10371
// Function ID: 10372
// Name: useFrecencySettings
// Dependencies: [19, 1221, 1940, 504, 2]
// Exports: useFrecencySettings

// Module 10371 (useFrecencySettings)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1221 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = React.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = flag(closure_1_1[2]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [closure_3];
  return flag(504).useStateFromStores(items1, () => obj.frecencyWithoutFetchingLatest);
};
