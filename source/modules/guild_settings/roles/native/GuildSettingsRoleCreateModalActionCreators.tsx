// Module ID: 16608
// Function ID: 16609
// Dependencies: [4507, 16609, 1988, 2]

// Module 16608
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(16609, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4507).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
