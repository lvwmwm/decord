// Module ID: 9584
// Function ID: 74677
// Name: useFrecencySettings
// Dependencies: [31, 1316, 1331, 566, 2]
// Exports: useFrecencySettings

// Module 9584 (useFrecencySettings)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings() {
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = outer1_0(outer1_1[2]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.frecencyWithoutFetchingLatest);
};
