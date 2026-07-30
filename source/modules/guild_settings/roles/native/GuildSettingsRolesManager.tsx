// Module ID: 16439
// Function ID: 16440
// Name: setRoleJustCreated
// Dependencies: [644, 705, 2]
// Exports: setRoleJustCreated

// Module 16439 (setRoleJustCreated)
import keys from "keys";

const obj = keys.create(() => ({ roleJustCreated: false }));
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_2.setState({ roleJustCreated: closure_0 }));
};
export const useGuildSettingsRolesManagerState = obj;
