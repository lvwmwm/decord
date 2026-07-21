// Module ID: 9576
// Function ID: 74623
// Name: useFrecencySettings
// Dependencies: []
// Exports: useFrecencySettings

// Module 9576 (useFrecencySettings)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings() {
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(closure_1[2]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => obj.frecencyWithoutFetchingLatest);
};
