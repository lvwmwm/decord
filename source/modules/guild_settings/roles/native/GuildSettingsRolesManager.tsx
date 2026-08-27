// Module ID: 17103
// Function ID: 17104
// Name: setRoleJustCreated
// Dependencies: [644, 705, 2]
// Exports: setRoleJustCreated

// Module 17103 (setRoleJustCreated)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

const obj = keys.create(() => ({ roleJustCreated: false }));
const result = set.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_2.setState({ roleJustCreated: closure_0 }));
};
export const useGuildSettingsRolesManagerState = obj;
