// Module ID: 18054
// Function ID: 18055
// Name: GuildSettingsRolesManager
// Dependencies: [562, 1252, 2]
// Exports: setRoleJustCreated

// Module 18054 (GuildSettingsRolesManager)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useGuildSettingsRolesManagerState = module_562.create(() => ({ roleJustCreated: false }));
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(roleJustCreated) {
  _require = roleJustCreated;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { roleJustCreated };
    return obj.setState(obj);
  });
};
export { useGuildSettingsRolesManagerState };
