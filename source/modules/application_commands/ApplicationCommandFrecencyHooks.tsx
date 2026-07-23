// Module ID: 7929
// Function ID: 63200
// Name: useTopCommands
// Dependencies: [31, 7922, 662, 1331, 566, 2]
// Exports: useTopCommands, useTopRealCommands

// Module 7929 (useTopCommands)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";

let closure_3;
let closure_4;
const require = arg1;
({ getFilteredTopCommands: closure_3, getTopRealCommands: closure_4 } = _isNativeReflectConstruct);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = function useTopCommands(commandContext) {
  const _require = commandContext;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = commandContext(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(outer1_6.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_5.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, commandContext];
  return React.useMemo(() => outer1_3(stateFromStores, closure_0), items1);
};
export const useTopRealCommands = function useTopRealCommands(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_5.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, arg0];
  return React.useMemo(() => outer1_4(outer1_3(stateFromStores, closure_0)), items1);
};
