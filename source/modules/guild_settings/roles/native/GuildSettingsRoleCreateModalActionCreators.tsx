// Module ID: 16535
// Function ID: 16536
// Dependencies: [4461, 16536, 1959, 2]

// Module 16535
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(16536, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4461).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
