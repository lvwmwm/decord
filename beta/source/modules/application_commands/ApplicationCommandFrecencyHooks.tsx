// Module ID: 8600
// Function ID: 8601
// Name: ApplicationCommandFrecencyHooks
// Dependencies: [19, 8593, 1084, 2026, 504, 2]
// Exports: useTopCommands, useTopRealCommands

// Module 8600 (ApplicationCommandFrecencyHooks)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import react from "react" /* 19 */;
import ApplicationCommandFrecencyStore_mod from "ApplicationCommandFrecencyStore" /* 8593 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let ApplicationCommandFrecencyStore = ApplicationCommandFrecencyStore_mod;
({ getFilteredTopCommands: c3, getTopRealCommands: closure_4 } = ApplicationCommandFrecencyStore);
ApplicationCommandFrecencyStore = ApplicationCommandFrecencyStore_mod;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyHooks.tsx");

export const useTopCommands = function useTopCommands(commandContext) {
  let stateFromStores;
  let topCommandsWithoutLoadingLatest;
  _require = commandContext;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = commandContext(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(constants.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [ApplicationCommandFrecencyStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, commandContext];
  return react.useMemo(() => _false(stateFromStores, commandContext), items1);
};
export const useTopRealCommands = function useTopRealCommands(arg0) {
  let closure_0;
  let stateFromStores;
  let topCommandsWithoutLoadingLatest;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [ApplicationCommandFrecencyStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => topCommandsWithoutLoadingLatest.getTopCommandsWithoutLoadingLatest());
  const items1 = [stateFromStores, arg0];
  return react.useMemo(() => React3(_false(stateFromStores, closure_0)), items1);
};
