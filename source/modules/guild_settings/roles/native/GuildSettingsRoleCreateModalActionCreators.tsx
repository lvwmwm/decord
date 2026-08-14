// Module ID: 16782
// Function ID: 16783
// Dependencies: [4572, 16783, 2007, 2]

// Module 16782
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(16783, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4572).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
