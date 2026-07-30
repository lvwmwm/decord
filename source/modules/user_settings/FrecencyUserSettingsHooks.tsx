// Module ID: 9599
// Function ID: 9600
// Name: useFrecencySettings
// Dependencies: [19, 1340, 1355, 589, 2]
// Exports: useFrecencySettings

// Module 9599 (useFrecencySettings)
import noop from "noop";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";

const require = arg1;
const result = require("updateUserGuildSettings").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings() {
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(table[2]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [handleConnectionClosedOrResumed];
  return require(589) /* initialize */.useStateFromStores(items, () => obj.frecencyWithoutFetchingLatest);
};
