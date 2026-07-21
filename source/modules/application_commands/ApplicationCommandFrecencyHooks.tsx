// Module ID: 7923
// Function ID: 63153
// Name: useTopCommands
// Dependencies: []
// Exports: useTopCommands, useTopRealCommands

// Module 7923 (useTopCommands)
let closure_2 = importAll(dependencyMap[0]);
({ getFilteredTopCommands: closure_3, getTopRealCommands: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[1]);
const UserSettingsTypes = arg1(dependencyMap[2]).UserSettingsTypes;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = function useTopCommands(commandContext) {
  const arg1 = commandContext;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, commandContext];
  return React.useMemo(() => callback(stateFromStores, arg0), items1);
};
export const useTopRealCommands = function useTopRealCommands(arg0) {
  const arg1 = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, arg0];
  return React.useMemo(() => callback2(callback(stateFromStores, arg0)), items1);
};
