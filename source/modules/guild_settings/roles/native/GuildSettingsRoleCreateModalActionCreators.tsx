// Module ID: 16440
// Function ID: 16441
// Dependencies: [4395, 16441, 1959, 2]

// Module 16440
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(16441, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
