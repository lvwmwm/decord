// Module ID: 16567
// Function ID: 16568
// Dependencies: [4490, 16568, 1959, 2]

// Module 16567
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(16568, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
