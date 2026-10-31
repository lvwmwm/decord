// Module ID: 19767
// Function ID: 19768
// Name: GuildSettingsRolesManager
// Dependencies: [560, 1259, 2]
// Exports: setRoleJustCreated

// Module 19767 (GuildSettingsRolesManager)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useGuildSettingsRolesManagerState = module_560.create(() => ({ roleJustCreated: false }));
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export function setRoleJustCreated(roleJustCreated) {
  _require = roleJustCreated;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { roleJustCreated };
    return obj.setState(obj);
  });
}
export { useGuildSettingsRolesManagerState };
