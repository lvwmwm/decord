// Module ID: 16588
// Function ID: 16589
// Dependencies: [4490, 16589, 1988, 2]

// Module 16588
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(16589, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
