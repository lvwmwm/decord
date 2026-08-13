// Module ID: 16766
// Function ID: 16767
// Dependencies: [4550, 16767, 2007, 2]

// Module 16766
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(16767, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};
