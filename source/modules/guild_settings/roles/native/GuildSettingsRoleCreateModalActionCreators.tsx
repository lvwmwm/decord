// Module ID: 16685
// Function ID: 16686
// Dependencies: [4509, 16686, 1988, 2]

// Module 16685
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(16686, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
