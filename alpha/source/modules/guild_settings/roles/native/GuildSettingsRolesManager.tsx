// Module ID: 17777
// Function ID: 17778
// Name: GuildSettingsRolesManager
// Dependencies: [570, 1259, 2]
// Exports: setRoleJustCreated

// Module 17777 (GuildSettingsRolesManager)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useGuildSettingsRolesManagerState = module_570.create(() => ({ roleJustCreated: false }));
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(roleJustCreated) {
  _require = roleJustCreated;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { roleJustCreated };
    return obj.setState(obj);
  });
};
export { useGuildSettingsRolesManagerState };
